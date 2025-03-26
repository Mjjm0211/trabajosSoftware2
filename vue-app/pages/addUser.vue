<template>
    <div>
      <h1>Agregar Nuevo Usuario</h1>
      <form @submit.prevent="submitUser">
        <input v-model="newUser.nombre" type="text" placeholder="Nombre" required />
        <input v-model="newUser.email" type="email" placeholder="Correo Electrónico" required />
        <input v-model="newUser.password" type="password" placeholder="Contraseña" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUsersStore } from '../store/users'
  import { useRouter } from 'vue-router'
  
  const usersStore = useUsersStore()
  const router = useRouter()
  
  const newUser = ref({
    nombre: '',
    email: '',
    password: '',
  })
  
  const submitUser = async () => {
    await usersStore.addUser(newUser.value)
    router.push('/users')
  }
  </script>
  