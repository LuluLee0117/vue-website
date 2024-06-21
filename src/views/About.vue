<template>
  <div class="container mx-auto p-8">
    <!-- About Section -->
    <section class="about bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold">
        <font-awesome-icon icon="user" class="text-primary mr-2"/> 
        About Me
      </h1>
      <p class="mt-4">Hello, I'm JAI RUI LI, a Master of Computer Science student from Tunghai University. Ever since I was a kid, I've had a passion for computers and drawing, and this passion has led me to study Computer Science. Here, I am immersed in exploring how blockchain technology can be used to transform traditional time banking to make time investment more transparent and efficient. This was not only my master's research, but also allowed me to realize the infinite possibilities of technological problem solving.</p>
      <p class="mt-4">In addition to academic research, I also love to participate in various web application development. Whether it's designing a florist's website or participating in some super cool social experiment, every experience makes my blood boil. I love using Vue.js and Tailwind CSS to build websites that look good and work well, which has given me a lot of valuable experience in front-end design and user experience.</p>
      <p class="mt-4">I am passionate about technology and am always looking for new learning opportunities and ways to apply innovative technologies to real-world problems. Through my website, I hope to share my passion and exploration with you, and maybe we can even work together in the future!</p>
      <p class="mt-4">Thank you for stopping by and I hope you find something interesting. If you want to learn more, or just want to say hi, feel free to reach out to me through my contact form!</p>
    </section>

    <!-- Skills Section -->
    <section class="skills mt-8 bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h2 class="text-3xl font-bold">
        <font-awesome-icon icon="tools" class="text-primary mr-2"/> 
        My Skills
      </h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="skill bg-white p-4 shadow-md rounded-lg">
          <h3 class="text-xl font-bold text-accent">
            <font-awesome-icon icon="code" class="text-primary mr-2"/> 
            Frontend Development
          </h3>
          <p class="mt-2">Proficient in Vue.js and Tailwind CSS, enabling the creation of responsive and modern user interfaces. Also skilled in JavaScript, facilitating the development of interactive and user-friendly websites.</p>
        </div>
        <div class="skill bg-white p-4 shadow-md rounded-lg">
          <h3 class="text-xl font-bold text-accent">
            <font-awesome-icon icon="laptop-code" class="text-primary mr-2"/> 
            Programming Languages
          </h3>
          <p class="mt-2">Experienced in multiple programming languages including Python, C, and JavaScript, allowing for flexible work across various development environments.</p>
        </div>
        <div class="skill bg-white p-4 shadow-md rounded-lg">
          <h3 class="text-xl font-bold text-accent">
            <font-awesome-icon icon="database" class="text-primary mr-2"/> 
            Database Management
          </h3>
          <p class="mt-2">Experienced with MongoDB, MariaDB, and MySQL, and proficient in using XAMPP for database setup and management, enabling the design and maintenance of complex data storage solutions.</p>
        </div>
        <div class="skill bg-white p-4 shadow-md rounded-lg">
          <h3 class="text-xl font-bold text-accent">
            <font-awesome-icon icon="magic" class="text-primary mr-2"/> 
            Tarot Reading
          </h3>
          <p class="mt-2">Skilled in Tarot reading, providing insightful readings to help people understand their past, present, and future, and to offer guidance on personal and professional matters.</p>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="projects mt-8 p-8 bg-secondary text-textPrimary shadow-md rounded-lg">
      <h2 class="text-3xl font-bold">
        <font-awesome-icon icon="project-diagram" class="text-primary mr-2"/> 
        Projects
      </h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="project bg-white text-textPrimary p-4 shadow-md rounded-lg">
          <h3 class="text-2xl font-bold">Blockchain-based Time Banking</h3>
          <p class="mt-2"><strong>Background:</strong> This project was part of my master's thesis, aiming to transform traditional time banking using blockchain technology.</p>
          <p class="mt-2"><strong>Objective:</strong> Enhance transparency and efficiency in time banking transactions.</p>
          <p class="mt-2"><strong>Technologies Used:</strong> Blockchain, Smart Contracts, Hyperledger Fabric.</p>
          <p class="mt-2"><strong>My Role:</strong> Conducted research on blockchain applications, designed the system architecture, and implemented smart contracts to ensure secure and transparent transactions.</p>
          <img class="mt-2" src="images/bank.png" alt="Blockchain-based Time Banking Project Image">
        </div>
        <div class="project bg-white text-textPrimary p-4 shadow-md rounded-lg">
          <h3 class="text-2xl font-bold">YOLO v4 Fall Detection System</h3>
          <p class="mt-2"><strong>Background:</strong> This project was part of my undergraduate studies, focusing on developing a fall detection system using computer vision.</p>
          <p class="mt-2"><strong>Objective:</strong> Provide a reliable method for detecting falls in real-time to assist in elder care.</p>
          <p class="mt-2"><strong>Technologies Used:</strong> YOLO v4, OpenCV, Python.</p>
          <p class="mt-2"><strong>My Role:</strong> Designed and implemented the fall detection algorithm, conducted extensive testing to ensure accuracy, and fine-tuned the model for real-time performance.</p>
          <p class="mt-2"><strong>Outcome:</strong> Achieved a high accuracy rate in detecting falls, with the system being capable of processing video feeds in real-time.</p>
          <img class="mt-2" src="/images/fall.jpg" alt="YOLO v4 Fall Detection System Project Image">
        </div>
        <div>
          <router-link to="/projects">
            <button class="mt-5 bg-primary text-white p-2 rounded-lg text-xl">
              <font-awesome-icon icon="external-link-alt" class="text-white mr-2"/> 
              Learn More ...
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="experience mt-8 p-8 bg-secondary text-textPrimary shadow-md rounded-lg">
      <h2 class="text-3xl font-bold">
        <font-awesome-icon icon="briefcase" class="text-primary mr-2"/> 
        Experience
      </h2>
      <div class="mt-4">
        <div class="experience-item bg-white text-textPrimary p-4 shadow-md rounded-lg mb-4">
          <h3 class="text-2xl font-bold">AI思維與邏輯設計助教</h3>
          <p class="text-gray-600">2020/09 - 2024/06</p>
          <p class="mt-2">Assisted in teaching the course 'AI思維與邏輯設計', helping students understand AI concepts and practical implementations.</p>
        </div>
        <div class="experience-item bg-white text-textPrimary p-4 shadow-md rounded-lg mb-4">
          <h3 class="text-2xl font-bold">Teaching  at Tunghai High School Elite Class</h3>
          <p class="text-gray-600">2022/10 - 2023/06</p>
          <p class="mt-2">Helped students understand AI and complete projects, including a pest detection system using YOLO v7 and a machine learning-based cancer index prediction.</p>
        </div>
        <div class="experience-item bg-white text-textPrimary p-4 shadow-md rounded-lg">
          <h3 class="text-2xl font-bold">Research Assistant at Secure Community Computing Laboratory</h3>
          <p class="text-gray-600">2022/09 - Now</p>
          <p class="mt-2">Currently researching a blockchain-based time bank for my thesis, focusing on enhancing transparency and efficiency in time banking.</p>
        </div>
      </div>
    </section>

    <!-- Interests Section -->
    <section class="interests mt-8 p-8 bg-secondary text-textPrimary shadow-md rounded-lg">
      <h2 class="text-3xl font-bold">
        <font-awesome-icon icon="heart" class="text-primary mr-2"/> 
        Interests
      </h2>
      <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="interest bg-white text-textPrimary p-4 shadow-md rounded-lg">
          <h3 class="text-2xl font-bold">Gaming</h3>
          <p class="mt-2">I enjoy playing video games in my spare time. It's a great way to relax and also stimulates my problem-solving skills and creativity.</p>
        </div>
        <div class="interest bg-white text-textPrimary p-4 shadow-md rounded-lg">
          <h3 class="text-2xl font-bold">Drawing</h3>
          <p class="mt-2">Drawing has been a passion of mine since childhood. I love expressing my creativity through various forms of art.</p>
          <img class="rounded-lg mb-4" src="images/lu.png" alt="drawing">
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
}
</script>

<style scoped>
</style>
