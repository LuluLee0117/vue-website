<template>
  <div class="app">
    <nav class="bg-white shadow-md py-4 fixed w-full top-0 z-50">
      <div class="container mx-auto flex justify-between items-center">
        <div class="text-primary text-2xl font-bold">JAI RUI LI</div>
        <div class="flex space-x-4">
          <router-link to="/" class="text-textPrimary hover:text-primary">Home</router-link>
          <router-link to="/about" class="text-textPrimary hover:text-primary">About Me</router-link>
          <router-link to="/projects" class="text-textPrimary hover:text-primary">Project</router-link>
        <!--  <router-link to="/services" class="text-textPrimary hover:text-primary">Services</router-link>-->
          <router-link to="/tarot" class="text-textPrimary hover:text-gray-300">Tarot</router-link>
          <router-link to="/contact" class="text-textPrimary hover:text-primary">Contact</router-link>
        </div>
        <div class="flex space-x-4">
          <a href="https://www.instagram.com/i20890117/" target="_blank" class="text-primary"><i class="fab fa-instagram"></i></a>
          <a href="https://github.com/LuluLee0117?tab=repositories" target="_blank" class="text-primary"><i class="fab fa-github"></i></a>
         <!-- <a href="https://www.twitter.com" target="_blank" class="text-primary"><i class="fab fa-twitter"></i></a>-->
          <a href="https://www.linkedin.com/in/%E4%BD%B3%E5%8F%A1-%E6%9D%8E-b82879241/" target="_blank" class="text-primary"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </nav>
    <main class="bg-background text-textPrimary min-h-screen pt-24 p-8">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Arial', sans-serif;
}
</style>