<script setup>
    // v-html Rendering.
    const name = "<strong>Browse</strong>";
</script>

<template>
    <header class="bg-[#FFF9F4] top-0 z-50">
        <nav class="container mx-auto flex items-center justify-between px-10 md:px-20 py-4">
            <div class="flex items-center gap-3">
                <img class="h-[30px] md:h-full" src="@/assets/pictures/logo-header.png" alt="">
                <!-- v-html Rendering -->
                <p class="hidden md:block"><span v-html="name"></span><span class="text-[#FFDC26]">4</span>Pets</p> 
                <!-- v-html Rendering -->
            </div>
            <div class="md:flex items-center justify-between gap-5 hidden md:block">
                <p>Find a Pet</p>
                <p>Breeds</p>
                <p>Contact us</p>
            </div>
            <div class="md:flex items-center justify-between gap-3 hidden md:block">
                <i class="fa-regular fa-bell"></i>
                <i class="fa-solid fa-magnifying-glass"></i>
                <button class="bg-[#FFFFFF] border border-[#FFDC26] rounded-lg px-4 py-1">Login</button>
                <button class="bg-[#FFDC26] rounded-lg px-4 py-1">Register</button>
            </div>
            <div class="block md:hidden">
                <i class="fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
</template>

<style scoped>

</style>