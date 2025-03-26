<template>
    <div>
      <h1>Lista de Películas</h1>
      <ul>
        <li v-for="movie in movies" :key="movie._id">
          <span>{{ movie.titulo }} - {{ movie.director }}</span>
          <button @click="deleteMovie(movie._id)">Eliminar</button>
          <button @click="editMovie(movie._id)">Editar</button>
        </li>
      </ul>
      <NuxtLink to="/addMovie">
        <button>Agregar Película</button>
      </NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue'
  import { useMoviesStore } from '../store/movies'
  
  const moviesStore = useMoviesStore()
  const { movies, fetchMovies, deleteMovie, editMovie } = moviesStore
  
  onMounted(() => {
    fetchMovies()
  })
  </script>
  