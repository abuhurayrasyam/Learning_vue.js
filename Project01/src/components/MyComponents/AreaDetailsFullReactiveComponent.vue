<script setup>
// Toggle Accordion with v-for.
import { ref, reactive } from 'vue';
const informations = [
    {city: "Dhaka", info: "Dhaka, the capital of Bangladesh, is known for its vibrant culture, historical landmarks, and bustling markets. It is a city that never sleeps, offering a rich blend of tradition and modernity."},
    {city: "Tangail", info: "Tangail is renowned for its handloom sarees, known as Tangail sarees. It is a district with a rich cultural heritage, surrounded by scenic beauty and fertile agricultural land."},
    {city: "Ghatail", info: "Ghatail is a sub-district in Tangail, known for its lush green landscapes and serene environment. It offers a peaceful retreat from the hustle and bustle of city life."},
    {city: "Dewlabari", info: "Dewlabari is a locality in Tangail, known for its natural beauty and friendly community. It is a charming place that reflects the simplicity and warmth of rural Bangladesh."},
    {city: "MUSAFIR", info: "Home of Abu Hurayra"}
]

//const accordions = reactive([false, false, false, false]); //without loop
const accordions = reactive([]); //with loop
for (let i = 0; i < informations.length; i++ ){
    accordions.push(false);
}
</script>

<template>
    <div class="container mx-auto pt-10">
        <div class="space-y-4">
            <div v-for="(information, index) in informations">
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="accordions[index] = !accordions[index];">
                    <span class="text-lg font-semibold">{{ information.city }}</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" v-show="accordions[index]">
                    <p>{{ information.info }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>