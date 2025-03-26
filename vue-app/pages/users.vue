<template>
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        <li v-for="user in users" :key="user._id">
          <span>{{ user.nombre }} - {{ user.email }}</span>
          <button @click="deleteUser(user._id)">Eliminar</button>
          <button @click="editUser(user._id)">Editar</button>
        </li>
      </ul>
      <NuxtLink to="/addUser">
        <button>Agregar Usuario</button>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useUsersStore } from '../store/users'
  
  const usersStore = useUsersStore()
  const { users, fetchUsers, deleteUser, editUser } = usersStore
  
  onMounted(() => {
    fetchUsers()
  })
  </script>
  