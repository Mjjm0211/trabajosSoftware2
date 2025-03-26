<template>
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
            
            
            <div class="flex space-x-6">
                
                <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">
                    Home
                </NuxtLink>
                
                
                
                <NuxtLink to="/users" class="text-gray-600 hover:text-gray-900">
                    Users
                </NuxtLink>
                <NuxtLink to="/movies" class="text-gray-600 hover:text-gray-900">
                    Movies
                </NuxtLink>
                <NuxtLink to="/login" class="text-gray-600 hover:text-gray-900">
                    Login
                </NuxtLink>
                <NuxtLink to="/register" class="text-gray-600 hover:text-gray-900">
                    Register
                </NuxtLink>
                
            </div>
        </nav>
    <div>
        <NuxtPage /> <!-- a todas las paginas yo les aplico el layout -->
        
    </div>
</template>


