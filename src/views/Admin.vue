<template>
  <div class="container mx-auto p-8">
    <section class="admin bg-secondary text-textPrimary p-8 shadow-md rounded-lg">
      <h1 class="text-3xl font-bold">Admin Dashboard</h1>
      <div v-if="contacts.length">
        <table class="w-full mt-4 border-collapse">
          <thead>
            <tr>
              <th class="border p-2">Name</th>
              <th class="border p-2">Email</th>
              <th class="border p-2">Message</th>
              <th class="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" :key="contact._id">
              <td class="border p-2">{{ contact.name }}</td>
              <td class="border p-2">{{ contact.email }}</td>
              <td class="border p-2">{{ contact.message }}</td>
              <td class="border p-2">
                <button @click="deleteContact(contact._id)" class="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-else>
        <p>No contacts available.</p>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminView',
  data() {
    return {
      contacts: [],
    };
  },
  async created() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.$router.push('/login');
    } else {
      try {
        const response = await axios.get('http://localhost:3000/contacts', {
          headers: { Authorization: token }
        });
        this.contacts = response.data;
      } catch (error) {
        alert('Failed to fetch contacts: ' + error.message);
      }
    }
  },
  methods: {
    async deleteContact(id) {
      const token = localStorage.getItem('token');
      try {
        await axios.delete(`http://localhost:3000/contacts/${id}`, {
          headers: { Authorization: token }
        });
        this.contacts = this.contacts.filter(contact => contact._id !== id);
      } catch (error) {
        alert('Failed to delete contact: ' + error.message);
      }
    },
  },
};
</script>

<style scoped>
</style>

