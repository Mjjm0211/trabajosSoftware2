import { defineStore } from 'pinia';


// toda la logica va aqui

//funcion para obtener los usuarios
export const useUsersStore =defineStore('users', () => {
    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        return data;
    };

    //funcion para obtener un usuario por id
    return {
        fetchUsers
    }
})
