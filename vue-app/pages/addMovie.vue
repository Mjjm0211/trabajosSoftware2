<template>
    <div>
      <h1>Agregar Nueva Película</h1>
      <form @submit.prevent="submitMovie">
        <input v-model="newMovie.titulo" type="text" placeholder="Título" required />
        <input v-model="newMovie.director" type="text" placeholder="Director" required />
        <input v-model="newMovie.anio" type="number" placeholder="Año" required />
        <input v-model="newMovie.genero" type="text" placeholder="Género" required />
        <textarea v-model="newMovie.sinopsis" placeholder="Sinopsis" required></textarea>
        <input v-model="newMovie.duracion" type="number" placeholder="Duración (minutos)" required />
        <input v-model="newMovie.imagen" type="text" placeholder="Imagen URL" required />
        <button type="submit">Agregar</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useMoviesStore } from '../store/movies'
  import { useRouter } from 'vue-router'
  
  const moviesStore = useMoviesStore()
  const router = useRouter()
  
  const newMovie = ref({
    titulo: '',
    director: '',
    anio: '',
    genero: '',
    sinopsis: '',
    duracion: '',
    imagen: '',
  })
  
  const submitMovie = async () => {
    await moviesStore.addMovie(newMovie.value)
    router.push('/movies')
  }
  </script>
  