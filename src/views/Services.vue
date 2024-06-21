<template>
    <div class="container mx-auto p-8">
      <!-- Services Section -->
      <section class="services bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
        <h1 class="text-3xl font-bold">My Services</h1>
        <p class="mt-4">I offer a range of professional services to help you achieve your goals. Whether you need a modern website, custom software solutions, or insights through data analysis, I am here to help.</p>
      </section>
  
      <!-- Service Details Section -->
      <section class="service-details mt-8 bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
        <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="service bg-white text-textPrimary p-4 shadow-md rounded-lg">
            <h3 class="text-2xl font-bold">Web Development</h3>
            <p class="mt-2">Creating responsive and modern websites using technologies like Vue.js and Tailwind CSS. I can help you build a strong online presence with a website that looks great and performs well.</p>
            <img class="mt-2" src="path_to_image" alt="Web Development Image">
          </div>
          <div class="service bg-white text-textPrimary p-4 shadow-md rounded-lg">
            <h3 class="text-2xl font-bold">Custom Software Solutions</h3>
            <p class="mt-2">Developing tailored software solutions to meet your specific business needs. From desktop applications to complex enterprise systems, I can help you streamline your processes and improve efficiency.</p>
            <img class="mt-2" src="path_to_image" alt="Custom Software Solutions Image">
          </div>
          <div class="service bg-white text-textPrimary p-4 shadow-md rounded-lg">
            <h3 class="text-2xl font-bold">Data Analysis</h3>
            <p class="mt-2">Providing insights through data analysis to help you make informed decisions. Using tools like Python and SQL, I can help you uncover patterns and trends in your data.</p>
            <img class="mt-2" src="path_to_image" alt="Data Analysis Image">
          </div>
          <div class="service bg-white text-textPrimary p-4 shadow-md rounded-lg">
            <h3 class="text-2xl font-bold">Tarot Reading</h3>
            <p class="mt-2">Offering Tarot reading sessions to provide guidance and insights on personal and professional matters. My readings are designed to help you gain clarity and direction.</p>
            <img class="mt-2" src="path_to_image" alt="Tarot Reading Image">
          </div>
        </div>
      </section>
  
      <!-- Testimonials Section -->
      <section class="testimonials mt-8 bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
        <h2 class="text-3xl font-bold">Client Testimonials</h2>
        <div class="mt-4">
          <div class="testimonial bg-white text-textPrimary p-4 shadow-md rounded-lg mb-4">
            <p class="mt-2">"JAI RUI LI developed a fantastic website for our business. The design is modern and the functionality is top-notch. Highly recommend!"</p>
            <p class="mt-2 font-bold">- Client Name</p>
          </div>
          <div class="testimonial bg-white text-textPrimary p-4 shadow-md rounded-lg mb-4">
            <p class="mt-2">"The custom software solution provided by JAI RUI LI has significantly improved our workflow and efficiency. Excellent work!"</p>
            <p class="mt-2 font-bold">- Client Name</p>
          </div>
          <div class="testimonial bg-white text-textPrimary p-4 shadow-md rounded-lg">
            <p class="mt-2">"JAI RUI LI's data analysis services have given us valuable insights that we couldn't have obtained otherwise. Highly skilled and professional."</p>
            <p class="mt-2 font-bold">- Client Name</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesView',
  }
  </script>
  
  <style scoped>
  </style>
  