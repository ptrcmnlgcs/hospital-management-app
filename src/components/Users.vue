<template>
    <DashboardView />
    <div class="hello">
        <h1>User Management</h1>
        <button class="btn btn-info btn-sm m-1" @click="addUser()">Add a User</button>
        <table class="table table-striped table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>User Type</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.userType }}</td>
                    <td>
                        <button class="btn btn-warning btn-sm m-1" @click="editUser(user)">Edit</button>
                        <button class="btn btn-danger btn-sm m-1" @click="deleteUser(user)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <Modal v-if="showAddUserModal" @close="showAddUserModal = false">
    <template v-slot:header>
        <h5>Add New User</h5>
    </template>
    <template v-slot:body>
        <form @submit.prevent="postUser()" class="registration-form">
            <div class="form-group">
                <label for="name">Name:</label>
                <input class="form-control" type="text" v-model="newUserData.name" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input class="form-control" type="text" v-model="newUserData.email" id="email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input class="form-control" type="password" v-model="newUserData.password" id="password" required>
            </div>
            <div class="form-group">
                <label for="userType">User Type:</label>
                <select class="form-control" id="userType" v-model="newUserData.userType" required>
                    <option value="doctor">Doctor</option>
                    <option value="patient">Patient</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary m-1 btn-block">Register</button>
        </form>
        <div v-if="error" class="error">{{ error }}</div>
    </template>
</Modal>
