<template>
    <nav class="container mx-auto flex justify-between items-center py-4 px-6">
            
            
            <div class="flex space-x-6">
                <NuxtLink to="/users" class="text-gray-600 hover:text-gray-900">
                    Users
                </NuxtLink>
                <NuxtLink to="/" class="text-gray-600 hover:text-gray-900">
                    Home
                </NuxtLink>
                
            </div>
        </nav>
    <div>
        <NuxtPage /> <!-- a todas las paginas yo les aplico el layout -->
        
    </div>
</template>


