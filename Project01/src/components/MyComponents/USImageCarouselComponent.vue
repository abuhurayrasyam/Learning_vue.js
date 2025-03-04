<script setup>
//image carousel added.
import { ref } from 'vue';

const fullImage = ref('https://images.unsplash.com/photo-1688417486375-3508bc17b941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dS5zLnxlbnwwfHwwfHx8MA%3D%3D');

const images = [
    {
        thumb: "https://images.unsplash.com/photo-1688417486375-3508bc17b941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dS5zLnxlbnwwfHwwfHx8MA%3D%3D",
        full: "https://images.unsplash.com/photo-1688417486375-3508bc17b941?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dS5zLnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        thumb: "https://images.unsplash.com/photo-1698250789239-49a6d02df337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHUucy58ZW58MHx8MHx8fDA%3D",
        full: "https://images.unsplash.com/photo-1698250789239-49a6d02df337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHUucy58ZW58MHx8MHx8fDA%3D"
    },
    {
        thumb: "https://plus.unsplash.com/premium_photo-1670603709901-c867937fe557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHUucy58ZW58MHx8MHx8fDA%3D",
        full: "https://plus.unsplash.com/premium_photo-1670603709901-c867937fe557?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHUucy58ZW58MHx8MHx8fDA%3D"
    },
    {
        thumb: "https://images.unsplash.com/photo-1688113003556-d34b5fbf0456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHUucy58ZW58MHx8MHx8fDA%3D",
        full: "https://images.unsplash.com/photo-1688113003556-d34b5fbf0456?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHUucy58ZW58MHx8MHx8fDA%3D"
    }
];

function setImage(image){
    fullImage.value = image.full;
};
</script>

<template>
    <section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10 font-bold">Events and Reactivity (US)</h1>
        <div>
            <div class="flex gap-4">
                <img @click="setImage(image)" class="cursor-pointer w-[24%] h-[200px]" v-for="image in images" :src="image.thumb" :key="image.thumb">
            </div>
            <div class="mt-10">
                <img class="cursor-pointer w-full" :src="fullImage">
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>