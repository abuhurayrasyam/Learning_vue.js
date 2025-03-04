<script setup>
import USImageCarouselComponent from './USImageCarouselComponent.vue';
import UkImageCarouselComponent from './UKImageCarouselComponent.vue';

import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const tag = ref('');
watch(()=>route.params.tag,(newValue)=>{
    tag.value = newValue;
})

//image carousel added.
import NavComponent from './NavComponent.vue';

// const fullImage = ref('https://images.unsplash.com/photo-1700085060083-bc1ab594be2a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
const fullImage = ref('https://www.youtube.com/embed/Fya7xrW2Z3M');

const images = [
    {
        thumb: "https://img.youtube.com/vi/Fya7xrW2Z3M/0.jpg", // YouTube thumbnail
        full: "https://www.youtube.com/embed/Fya7xrW2Z3M" // YouTube embed link
    },
    {
        thumb: "https://images.unsplash.com/photo-1700085060083-bc1ab594be2a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        full: "https://images.unsplash.com/photo-1700085060083-bc1ab594be2a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1700085060083-bc1ab594be2a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        thumb: "https://plus.unsplash.com/premium_photo-1661964303354-f0496d6d6e0b?q=80&w=1620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        full: "https://plus.unsplash.com/premium_photo-1661964303354-f0496d6d6e0b?q=80&w=1620&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        thumb: "https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        full: "https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    // {
    //     thumb: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //     full: "https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    // }
];

function setImage(image){
    fullImage.value = image.full;
};
</script>

<template>
    <section>
        <div>
            <NavComponent/>
        </div>
        <section class="container mx-auto flex items-center flex-col">
            <h1 class="text-center text-2xl pt-10 pb-5 font-bold">Events and Reactivity</h1>
            <p class="flex items-center text-[25px] font-bold pb-5">
            {{ tag.toLocaleUpperCase() }}
            </p>
            <div>
                <div class="flex gap-4">
                    <img @click="setImage(image)" class="cursor-pointer w-[24%] h-[200px]" v-for="image in images" :src="image.thumb" :key="image.thumb">
                </div>
                <div class="mt-10">
                    <!-- <img class="cursor-pointer w-full" :src="fullImage"> -->
                    <img v-if="!fullImage.includes('youtube')" class="cursor-pointer w-full" :src="fullImage">
                    <iframe v-else class="w-full h-[500px]" :src="fullImage" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
            <div>
                <USImageCarouselComponent/>
            </div>
            <div>
                <UkImageCarouselComponent/>
            </div>
        </section>
    </section>
</template>

<style scoped>

</style>