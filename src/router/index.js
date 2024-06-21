import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Admin from '../views/Admin.vue'
import Projects from '../views/Projects.vue'
import Tarot from '../views/Tarot.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/admin', component: Admin },
  { path: '/projects', component: Projects },
  { path: '/tarot', component: Tarot },
  // 其他路由
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
