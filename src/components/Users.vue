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