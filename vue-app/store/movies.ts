import { defineStore } from 'pinia'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [] as any[],
    movie: null as any | null,
    error: null as string | null,
  }),

  actions: {
    // obtiene todas las peliculas
    async fetchMovies() {
      try {
        const response = await fetch('http://localhost:3001/movies')
        if (!response.ok) throw new Error('Error al obtener las películas')
        this.movies = await response.json()
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },

    // obtiene una pelicula por ID
    async fetchMovie(id: string) {
      try {
        const response = await fetch(`http://localhost:3001/movies/${id}`)
        if (!response.ok) throw new Error('Error al obtener la película')
        this.movie = await response.json()
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },

    // agrega una nueva pelicula
    async addMovie(newMovie: any) {
      try {
        const response = await fetch('http://localhost:3001/movies', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newMovie),
        })
        if (!response.ok) throw new Error('Error al agregar la película')
        const movie = await response.json()
        this.movies.push(movie)
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },

    // elimina   una película
    async deleteMovie(id: string) {
      try {
        const response = await fetch(`http://localhost:3001/movies/${id}`, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Error al eliminar la película')
        this.movies = this.movies.filter((movie) => movie._id !== id)
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },
    //edita una pelicula
    async editMovie(id: string, updatedMovie: any) {
      try {
        const response = await fetch(`http://localhost:3001/movies/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedMovie),
        })
        if (!response.ok) throw new Error('Error al actualizar la película')
        const movie = await response.json()
        // actualiza la pelicula en el estado de la lista
        const movieIndex = this.movies.findIndex((movie) => movie._id === id)
        if (movieIndex !== -1) {
          this.movies[movieIndex] = movie
        }
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    }





  },
})





