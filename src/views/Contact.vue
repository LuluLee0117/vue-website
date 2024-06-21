<template>
    <div class="container mx-auto p-8">
      <section class="contact bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
        <h1 class="text-3xl font-bold">Contact Me</h1>
        <form @submit.prevent="saveContact" class="mt-4">
          <div class="mb-4">
            <label class="block text-textPrimary">Name</label>
            <input v-model="form.name" type="text" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Name">
          </div>
          <div class="mb-4">
            <label class="block text-textPrimary">Email</label>
            <input v-model="form.email" type="email" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Email">
          </div>
          <div class="mb-4">
            <label class="block text-textPrimary">Message</label>
            <textarea v-model="form.message" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Your Message"></textarea>
          </div>
          <button type="submit" class="bg-primary text-white p-2 rounded-lg">Send</button>
        </form>
      </section>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'ContactView',
    data() {
      return {
        form: {
          name: '',
          email: '',
          message: '',
        },
      };
    },
    methods: {
      async saveContact() {
        try {
          const response = await axios.post('http://localhost:3000/save-contact', this.form);
          console.log('Response:', response.data);
          alert('Contact saved successfully!');
          this.form.name = '';
          this.form.email = '';
          this.form.message = '';
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to save contact: ' + error.message);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  </style>
  