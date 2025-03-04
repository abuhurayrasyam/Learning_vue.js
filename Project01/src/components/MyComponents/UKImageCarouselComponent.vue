<script setup>
//image carousel added.
import { ref } from 'vue';

const fullImage = ref('https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dS5rLnxlbnwwfHwwfHx8MA%3D%3D');

const images = [
    {
        thumb: "https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dS5rLnxlbnwwfHwwfHx8MA%3D%3D",
        full: "https://images.unsplash.com/photo-1562767332-ce0b1e2426bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dS5rLnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        thumb: "https://images.unsplash.com/photo-1611343387852-8d84d5ad07d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dS5rLnxlbnwwfHwwfHx8MA%3D%3D",
        full: "https://images.unsplash.com/photo-1611343387852-8d84d5ad07d6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dS5rLnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
        thumb: "https://plus.unsplash.com/premium_photo-1661313639796-8c38ae96756f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHUuay58ZW58MHx8MHx8fDA%3D",
        full: "https://plus.unsplash.com/premium_photo-1661313639796-8c38ae96756f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHUuay58ZW58MHx8MHx8fDA%3D"
    },
    {
        thumb: "https://images.unsplash.com/photo-1463680821868-35b3a7410f06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHUuay58ZW58MHx8MHx8fDA%3D",
        full: "https://images.unsplash.com/photo-1463680821868-35b3a7410f06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHUuay58ZW58MHx8MHx8fDA%3D"
    }
];

function setImage(image){
    fullImage.value = image.full;
};
</script>

<template>
    <section class="container mx-auto flex items-center flex-col">
        <h1 class="text-center text-2xl py-10 font-bold">Events and Reactivity (UK)</h1>
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