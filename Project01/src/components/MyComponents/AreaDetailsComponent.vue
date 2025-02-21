<script setup>
// Accordion, Toggle Accordion.
import { ref, reactive } from 'vue';
// Accordion.
// const accordionIndex = ref([0]);

//Toggle Accordion.
const accordions = reactive([false, false, false, false]);
function toggle(index){
    accordions[index] = !accordions[index];
}
</script>

<template>
    <!-- Accordion -->
    <!-- <div class="container mx-auto pt-10">
        <div class="space-y-4">
            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="accordionIndex=0">
                    <span class="text-lg font-semibold">Dhaka</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" :class="accordionIndex==0?'':'hidden'">
                    <p>Dhaka, the capital of Bangladesh, is known for its vibrant culture, historical landmarks, and bustling markets. It is a city that never sleeps, offering a rich blend of tradition and modernity.</p>
                </div>
            </div>
            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="accordionIndex=1">
                    <span class="text-lg font-semibold">Tangail</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" :class="accordionIndex==1?'':'hidden'">
                    <p>Tangail is renowned for its handloom sarees, known as Tangail sarees. It is a district with a rich cultural heritage, surrounded by scenic beauty and fertile agricultural land.</p>
                </div>
            </div>
            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="accordionIndex=2">
                    <span class="text-lg font-semibold">Ghatail</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" :class="accordionIndex==2?'':'hidden'">
                    <p>Ghatail is a sub-district in Tangail, known for its lush green landscapes and serene environment. It offers a peaceful retreat from the hustle and bustle of city life.</p>
                </div>
            </div>
            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="accordionIndex=3">
                    <span class="text-lg font-semibold">Dewlabari</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" :class="accordionIndex==3?'':'hidden'">
                    <p>Dewlabari is a locality in Tangail, known for its natural beauty and friendly community. It is a charming place that reflects the simplicity and warmth of rural Bangladesh.</p>
                </div>
            </div>
        </div>
    </div> -->

    <!-- Toggle Accordion. -->
    <div class="container mx-auto pt-10">
        <div class="space-y-4">
            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="toggle(0)">
                    <span class="text-lg font-semibold">Dhaka</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" v-show="accordions[0]">
                    <p>Dhaka, the capital of Bangladesh, is known for its vibrant culture, historical landmarks, and bustling markets. It is a city that never sleeps, offering a rich blend of tradition and modernity.</p>
                </div>
            </div>

            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="toggle(1)">
                    <span class="text-lg font-semibold">Tangail</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" v-show="accordions[1]">
                    <p>Tangail is renowned for its handloom sarees, known as Tangail sarees. It is a district with a rich cultural heritage, surrounded by scenic beauty and fertile agricultural land.</p>
                </div>
            </div>

            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="toggle(2)">
                    <span class="text-lg font-semibold">Ghatail</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" v-show="accordions[2]">
                    <p>Ghatail is a sub-district in Tangail, known for its lush green landscapes and serene environment. It offers a peaceful retreat from the hustle and bustle of city life.</p>
                </div>
            </div>

            <div>
                <button class="w-full text-left flex justify-between items-center bg-gray-200 p-4 rounded-t-lg" @click="toggle(3)">
                    <span class="text-lg font-semibold">Dewlabari</span>
                </button>
                <div class="bg-gray-100 p-4 border-t border-gray-300" v-show="accordions[3]">
                    <p>Dewlabari is a locality in Tangail, known for its natural beauty and friendly community. It is a charming place that reflects the simplicity and warmth of rural Bangladesh.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>

</style>