<template>
  <div class="container mx-auto p-8">
    <section class="login bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold">Login</h1>
      <form @submit.prevent="login" class="mt-4">
        <div class="mb-4">
          <label class="block text-textPrimary">Username</label>
          <input v-model="form.username" type="text" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Username">
        </div>
        <div class="mb-4">
          <label class="block text-textPrimary">Password</label>
          <input v-model="form.password" type="password" class="w-full p-2 border border-gray-300 rounded-lg" placeholder="Password">
        </div>
        <button type="submit" class="bg-primary text-white p-2 rounded-lg">Login</button>
      </form>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('http://localhost:3000/login', this.form);
        localStorage.setItem('token', response.data.token);
        this.$router.push('/admin');
      } catch (error) {
        alert('Failed to login: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
</style>

