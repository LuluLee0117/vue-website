<template>
  <div class="container mx-auto p-8">
    <section class="register bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold">Register</h1>
      <form @submit.prevent="register" class="mt-4">
        <div class="mb-4">
          <label class="block text-textPrimary">Username</label>
          <input v-model="form.username" type="text" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Username">
        </div>
        <div class="mb-4">
          <label class="block text-textPrimary">Password</label>
          <input v-model="form.password" type="password" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Password">
        </div>
        <button type="submit" class="bg-primary text-white p-2 rounded-lg">Register</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'RegisterView',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('http://localhost:3000/register', this.form);
        this.$router.push('/login');
      } catch (error) {
        alert('Failed to register: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
</style>

