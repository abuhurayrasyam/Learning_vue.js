<script setup>
// ref, reactive & event & css-class-binding [css-class and style-binding are same].
import {ref, reactive } from 'vue';
import NavComponent from './NavComponent.vue';

const locations = reactive([
    {id: 1, city: "Dhaka", color: "bg-red-500"}, 
    {id: 2, city: "Tangail", color: "bg-pink-500"}, 
    {id: 3, city: "Ghatail", color: "bg-blue-500"}, 
    {id: 4, city: "Dewlabari", color: "bg-green-500"}
])

const currentLocation = ref(locations[0].city);
const currentColor = ref(locations[0].color);

function changeLocation(newLocation){
    currentLocation.value = newLocation;
    if (newLocation === "Dhaka") {
        currentColor.value = "bg-red-500";
    } else if (newLocation === "Tangail") {
        currentColor.value = "bg-pink-500";
    } else if (newLocation === "Ghatail") {
        currentColor.value = "bg-blue-500";
    } else if (newLocation === "Dewlabari") {
        currentColor.value = "bg-green-500";
    }
}
</script>

<template>
    <section>
        <div>
        <NavComponent/>
        </div>
        <div class="flex space-x-4 justify-center pt-20 pb-10">
            <button class="text-white font-bold py-2 px-4 rounded" v-for="location in locations" :key="location.id" @click="changeLocation(location.city)" :class="location.color">
                {{location.city}}
            </button>
        </div>
        <p class="flex justify-center font-bold p-5" :class="currentColor">Your Current Location is {{currentLocation}}</p>
    </section>
</template>

<style scoped>

</style>