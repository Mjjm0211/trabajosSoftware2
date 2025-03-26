import { defineStore } from 'pinia'

export const useUsersStore = defineStore('users', {
  state: () => ({
    users: [] as any[],
    user: null as any | null,
    error: null as string | null,
  }),

  actions: {
    // obtiene todos los usuarios
    async fetchUsers() {
      try {
        const response = await fetch('http://localhost:3001/users')
        if (!response.ok) throw new Error('Error al obtener los usuarios')
        this.users = await response.json()
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },

    // obtiene un usuario por ID
    async fetchUser(id: string) {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`)
        if (!response.ok) throw new Error('Error al obtener el usuario')
        this.user = await response.json()
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },

    // agrega un nuevo usuario
    async addUser(newUser: any) {
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newUser),
        })
        if (!response.ok) throw new Error('Error al agregar el usuario')
        const user = await response.json()
        this.users.push(user)
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },

    // elimina un usuario
    async deleteUser(id: string) {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`, {
          method: 'DELETE',
        })
        if (!response.ok) throw new Error('Error al eliminar el usuario')
        this.users = this.users.filter((user) => user._id !== id)
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    },
    //edita un usuario
    async editUser(id: string, updatedUser: any) {
      try {
        const response = await fetch(`http://localhost:3001/users/${id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedUser),
        })
        if (!response.ok) throw new Error('Error al actualizar el usuario')
        const user = await response.json()
        // actualiza el usuario en el estado de la lista (suponiendo que tienes un array de usuarios en el estado)
        const userIndex = this.users.findIndex((user) => user._id === id)
        if (userIndex !== -1) {
          this.users[userIndex] = user
        }
      } catch (err: any) {
        this.error = err.message
        console.error(err)
      }
    }

  },
})
