<template>
    <div>
      <form @submit.prevent="registerUser">
        <input v-model="name" type="text" placeholder="Nombre" required />
        <input v-model="email" type="email" placeholder="Correo" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUserStore } from '../store/users'
  
  const name = ref('')
  const email = ref('')
  const password = ref('')
  const userStore = useUserStore()
  
  const registerUser = async () => {
    await userStore.register({
      name: name.value,
      email: email.value,
      password: password.value
    })
  }
  </script>
  