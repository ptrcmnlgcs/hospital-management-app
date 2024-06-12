<template>
    <div>
      Logging out...
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'LogoutView',
    async mounted() {
    try {
      // Send a logout request to the API
      await axios.post('http://127.0.0.1:8000/api/logout', {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      // Clear token and user data from local storage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      // Redirect to login page
      this.$router.push('/login');
    } catch (error) {
      console.error('Error logging out:', error);

      // Even if the API call fails, clear the local storage and redirect the user
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
}
  </script>
  
 