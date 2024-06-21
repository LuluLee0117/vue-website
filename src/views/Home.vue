<template>
  <div class="container mx-auto">
    <!-- Hero Section with Image Grid -->
    <section class="hero p-8 text-center">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="col-span-1">
          <img src="/images/image1.jpg" alt="Image 1" class="rounded-lg shadow-md w-full h-96 object-cover">
        </div>
        <div class="col-span-1">
          <img src="/images/image2.jpg" alt="Image 2" class="rounded-lg shadow-md w-full h-96 object-cover">
        </div>
        <div class="col-span-1">
          <img src="/images/image3.jpg" alt="Image 3" class="rounded-lg shadow-md w-full h-96 object-cover">
        </div>
        <div class="col-span-1">
          <img src="/images/image4.jpg" alt="Image 4" class="rounded-lg shadow-md w-full h-96 object-cover">
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about mt-8 p-8 bg-secondary text-textPrimary shadow-md rounded-lg flex items-center">
      <div class="w-2/3 pl-8">
        <h2 class="text-3xl font-bold mb-4">
          <font-awesome-icon icon="user" class="text-primary mr-2"/> 
          About Me
        </h2>
        <p class="mt-4">
          <font-awesome-icon icon="graduation-cap" class="text-primary mr-2"/> 
          Hello, I'm JAI RUI LI, a Master of Computer Science student from Tunghai University in Taiwan with extensive experience in front-end development and database management.
        </p>
        <p class="mt-4">
          <font-awesome-icon icon="project-diagram" class="text-primary mr-2"/> 
          Here you will find my passion for technology, the various innovative projects I have been involved in, and my insights on future technology trends.
        </p>
        <p class="mt-4">
          <font-awesome-icon icon="comments" class="text-primary mr-2"/> 
          In addition, this platform is also a place for me to communicate and share my experience with my peers.
        </p>
        <router-link to="/about">
          <button class="mt-5 bg-primary text-white p-2 rounded-lg text-xl">
            <font-awesome-icon icon="info-circle" class="text-white mr-2"/> 
            Learn More ...
          </button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
}
</script>

<style scoped>
</style>
