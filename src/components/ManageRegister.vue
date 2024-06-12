<template>
    <main>
        <div class="container">
            <div class="registration-container">
                <h1>Registration Form</h1>
                <form @submit.prevent="register" class="registration-form">
                    <div class="form-group">
                        <input type="text" v-model="name" id="name" placeholder="Name" required>
                    </div>
                    <div class="form-group">
                        <input type="text" class="effect-1" v-model="email" id="email" placeholder="Email" required>
                    </div>
                    <div class="form-group">
                        <input type="password" class="effect-1" v-model="password" id="password" placeholder="Password" required>
                    </div>
                    <button type="submit">Register</button>
                </form>
                <div v-if="error" class="error">{{ error }}</div>
                <span class="">Already have an account? <router-link to="/login">Login Now</router-link></span>
            </div>
        </div>
    </main>
    </template>
    
    <script>
    import axios from 'axios';
    
    export default {
        data() {
            return {
                name: '',
                email: '',
                password: '',
                error: ''
            };
        },
        methods: {
            async register() {
                try {
                    await axios.post('http://127.0.0.1:8000/api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                    });
    
                    this.name = '';
                    this.email = '';
                    this.password = '';
                } catch (err) {
                    if (err.response) {
                        this.error = `Error: ${err.response.data.message}`;
                        console.error(err.response.data);
                    } else if (err.request) {
                        this.error = 'No response from server. Please try again later.';
                        console.error(err.request);
                    } else {
                        this.error = 'Request error. Please check your input and try again.';
                        console.error('Error', err.message);
                    }
                }
            }
        }
    };
    </script>
    
    <style>
    main {
        height: 100vh;
        margin: 0;
        background-repeat: no-repeat;
        background-attachment: fixed;
    }
    
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    
    .registration-container {
        max-width: 500px;
        width: 100%;
        padding: 20px;
        background-color: #ffffff;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        text-align: center;
    }
    
    h1 {
        margin-bottom: 20px;
        font-size: 24px;
        color: #333333;
    }
    
    .registration-form {
        display: flex;
        flex-direction: column;
    }
    
    .form-group {
        margin-bottom: 15px;
    }
    
    input[type="text"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        margin: 5px 0;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    
    button {
        padding: 10px 15px;
        margin: 20px 0 10px 0;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }
    
    button:hover {
        background-color: #0056b3;
    }
    
    .error {
        color: red;
        margin-top: 10px;
    }
    
    span {
        display: block;
        margin-top: 15px;
    }
    
    .router-link {
        color: #007bff;
        text-decoration: none;
    }
    
    .router-link:hover {
        text-decoration: underline;
    }
    </style>
    