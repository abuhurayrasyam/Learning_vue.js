<script setup>
// In this component used v-for rendering.
import dogImg from "@/assets/pictures/dog-cartoon.png";
import fishImg from "@/assets/pictures/fish-cartoon.png";
import catImg from "@/assets/pictures/cat-cartoon.png";
import birdImg from "@/assets/pictures/bird-cartoon.png";
import mouseImg from "@/assets/pictures/mouse-cartoon.png";
import rabbitImg from"@/assets/pictures/rabbit-cartoon.png";

const categories = [
    {img: dogImg, name: "Dog", item: "3 Items"},
    {img: fishImg, name: "Fish", item: "3 Items"},
    {img: catImg, name: "Cat", item: "3 Items"},
    {img: birdImg, name: "Bird", item: "3 Items"},
    {img: mouseImg, name: "Mouse", item: "3 Items"},
    {img: rabbitImg, name: "Rabbit", item: "2 Items"}
]
</script>

<template>
    <!-- Browse By Categories Section -->
    <section class="bg-[#FFFFFF]">
        <div class="container mx-auto flex flex-col gap-3 px-10 md:px-20 mt-20 md:mt-0">
            <h1 class="adlam-font font-semibold text-[20px] md:text-[30px] mt-[-15px] md:mt-15">Browse By Categories</h1>
            <div class="grid grid-cols-2 md:grid-cols-6 items-center justify-between gap-5 my-8 md:my-15">
                <div class="bg-[#F9DF8A] flex flex-col items-center justify-between gap-1 px-8 py-10 rounded-lg h-[100%]" v-for="category in categories" :key="category.name">
                    <img class="bg-[#FFFFFF] p-5 rounded-[50%]" :src="category.img" alt="">
                    <h1 class="adlam-font font-semibold mt-3">{{category.name}}</h1>
                    <p>{{category.item}}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>