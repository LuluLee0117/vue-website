const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;
const SECRET_KEY = 'your-secret-key'; // 替換為你的密鑰

// 連接到 MongoDB
mongoose.connect('mongodb://localhost:27017/database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});

// 定義用戶的 Schema 和 Model
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

// 定義聯繫信息的 Schema 和 Model
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
});

const Contact = mongoose.model('Contact', contactSchema);

// 中間件
app.use(cors());
app.use(express.json());

// 用戶註冊路由
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ username, password: hashedPassword });

  try {
    await newUser.save();
    res.status(200).send('User registered successfully');
  } catch (error) {
    res.status(500).send('Error registering user: ' + error.message);
  }
});

// 用戶登入路由
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400).send('Invalid username or password');
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send('Invalid username or password');
  }

  const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// 驗證中間件
const auth = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send('Invalid token.');
  }
};

// POST 路由來保存聯繫信息
app.post('/save-contact', async (req, res) => {
  const { name, email, message } = req.body;

  const newContact = new Contact({ name, email, message });

  try {
    await newContact.save();
    console.log('New contact saved:', newContact);
    res.status(200).send('Contact saved successfully');
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).send('Error saving contact: ' + error.message);
  }
});

// GET 路由來獲取所有聯繫信息（需要認證）
app.get('/contacts', auth, async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).send('Error fetching contacts: ' + error.message);
  }
});

// DELETE 路由來刪除聯繫信息（需要認證）
app.delete('/contacts/:id', auth, async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).send('Contact deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting contact: ' + error.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
