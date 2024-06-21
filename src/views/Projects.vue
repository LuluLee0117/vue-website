<template>
  <div class="container mx-auto p-8">
    <!-- Projects Section -->
    <section class="projects bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h1 class="text-4xl font-bold mb-6">
        <font-awesome-icon class="text-primary mr-2"/> 
        My Projects
      </h1>
      <p class="text-lg mb-8">
        <font-awesome-icon class="text-primary mr-2"/> 
        Here are some of the projects I have worked on. These projects demonstrate my skills in web development, software engineering, and data analysis.
      </p>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Blockchain-based Time Banking Project -->
        <div class="project bg-white text-textPrimary p-6 shadow-lg rounded-lg">
          <img class="rounded-lg mb-4" src="images/bank.png" alt="Blockchain-based Time Banking Project Image">
          <h2 class="text-2xl font-bold mb-2">
            <font-awesome-icon icon="clock" class="text-primary mr-2"/> 
            Blockchain-based Time Banking
          </h2>
          <p class="mb-2"><strong>Background:</strong> This project was part of my master's thesis, aiming to transform traditional time banking using blockchain technology.</p>
          <p class="mb-2"><strong>Objective:</strong> Enhance transparency and efficiency in time banking transactions.</p>
          <p class="mb-2"><strong>Technologies Used:</strong> Blockchain, Smart Contracts, Hyperledger Fabric.</p>
          <p class="mb-4"><strong>My Role:</strong> Conducted research on blockchain applications, designed the system architecture, and implemented smart contracts to ensure secure and transparent transactions.</p>
          <!-- <a href="link_to_project_details" class="text-accent font-bold hover:underline">Read More</a>-->
        </div>

        <!-- YOLO v4 Fall Detection System Project -->
        <div class="project bg-white text-textPrimary p-6 shadow-lg rounded-lg">
          <img class="rounded-lg mb-4" src="images/yolo.png" alt="YOLO v4 Fall Detection System Project Image">
          <h2 class="text-2xl font-bold mb-2">
            <font-awesome-icon icon="eye" class="text-primary mr-2"/> 
            YOLO v4 Fall Detection System
          </h2>
          <p class="mb-2"><strong>Background:</strong> This project was part of my undergraduate studies, focusing on developing a fall detection system using computer vision.</p>
          <p class="mb-2"><strong>Objective:</strong> Provide a reliable method for detecting falls in real-time to assist in elder care.</p>
          <p class="mb-2"><strong>Technologies Used:</strong> YOLO v4, OpenCV, Python.</p>
          <p class="mb-4"><strong>My Role:</strong> Designed and implemented the fall detection algorithm, conducted extensive testing to ensure accuracy, and fine-tuned the model for real-time performance.</p>
          <a href="https://docs.google.com/presentation/d/1eRGD3DEjcCMV-HcUQwfKARB1brVPWFse/edit?usp=sharing&ouid=112304157479103862723&rtpof=true&sd=true" class="text-accent font-bold hover:underline">
            <font-awesome-icon icon="external-link-alt" class="text-primary mr-2"/> 
            Read More
          </a>
        </div>

        <!-- Todo List Application Project -->
        <div class="project bg-white text-textPrimary p-6 shadow-lg rounded-lg">
          <img class="rounded-lg mb-4" src="images/todo.png" alt="Todo List Application Project Image">
          <h2 class="text-2xl font-bold mb-2">
            <font-awesome-icon icon="check-square" class="text-primary mr-2"/> 
            Todo List Application
          </h2>
          <p class="mb-2"><strong>Background:</strong> A side project to create a functional and user-friendly Todo List application.</p>
          <p class="mb-2"><strong>Objective:</strong> Help users organize their tasks effectively with features like adding, editing, and deleting tasks.</p>
          <p class="mb-2"><strong>Technologies Used:</strong> Vue.js, Tailwind CSS, MongoDB.</p>
          <p class="mb-4"><strong>My Role:</strong> Developed the frontend using Vue.js and Tailwind CSS, and implemented the backend with MongoDB to handle task data.</p>
          <a href="https://github.com/LuluLee0117/Todolist" class="text-accent font-bold hover:underline">
            <font-awesome-icon icon="external-link-alt" class="text-primary mr-2"/> 
            Read More
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ProjectsView',
}
</script>

<style scoped>
.project img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.project a {
  color: #4A90E2; /* Example accent color */
}
</style>
