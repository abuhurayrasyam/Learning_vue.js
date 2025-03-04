<script setup>
import NavComponent from './NavComponent.vue';
import { ref } from 'vue';
import { countries } from '@/Data/countries';

const search = ref('');

function getFilteredCountries() {
    if (!search.value) return []; // Return empty array if search is empty
    return countries.filter(country => {
        // Check if the search term matches the full country name (case-insensitive)
        return country.code.toLowerCase() === search.value.toLowerCase();
    });
}
</script>

<template>
    <section>
        <div>
            <NavComponent />
        </div>
        <section class="container mx-auto flex flex-col items-center gap-3 mt-20">
            <p>{{ search }}</p>
            <p>
                Search: <input class="border rounded-lg border-[#00000]" type="text" v-model="search">
            </p>
            <p>
                <ul>
                    <li v-for="country in getFilteredCountries()" :key="country.code">
                        {{ country.name }}
                    </li>
                </ul>
            </p>
        </section>
    </section>
</template>

<style scoped>
</style>