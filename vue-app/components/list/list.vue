<template>
    <div>
        <h1>{{ titulo }}</h1>
        <div v-if="!users.length"> Loading...</div>
        <div>
            <ul>
                <li v-for="user in users" :key="user.id">
                    {{ user.name }} <!-- renderiza el nombre de cada usuario -->
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    users: {
        type: Array,
        required: true
    },
    titulo: {
        type: String,
        required: true
    }
    
});
</script>
