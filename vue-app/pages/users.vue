<template>
    <div>
        <h1>Users</h1>
        <List :users = "users" titulo="Lista de Usuarios" /> <!-- llamo al componente list -->
        
    </div>
</template>

<script setup>
import { useUsersStore } from '../store/users';
import { onMounted, ref } from 'vue';



const { fetchUsers } = useUsersStore(); // llamo a la funcion fetchUsers

const users = ref([]);
//cuando se monte la pagina se ejecuta la funcion fetchUsers
onMounted(async () => {
    users.value = await fetchUsers();
    
});
</script>