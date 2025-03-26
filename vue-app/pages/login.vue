<template>
    <div>
      <form @submit.prevent="loginUser">
        <input v-model="email" type="email" placeholder="Correo" required />
        <input v-model="password" type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useUserStore } from '../store/users'
  
  const email = ref('')
  const password = ref('')
  const userStore = useUserStore()
  
  const loginUser = async () => {
    await userStore.login({ email: email.value, password: password.value })
  }
  </script>
  