<script setup>
import NavComponent from './NavComponent.vue';

import { ref } from 'vue';
import {countries} from '@/Data/countries';
const search = ref('');

function getFilteredCountries(){
    return countries.filter(country => {
        return country.name.toLocaleLowerCase().startsWith(search.value.toLocaleLowerCase())
    })
}
</script>

<template>
    <section>
        <div>
            <NavComponent/>
        </div>
        <section class="container mx-auto flex flex-col items-center gap-3 mt-20">
        <p>{{ search }}</p>
        <p>
            Search: <input class="border rounded-lg border-[#00000]" type="text" v-model="search">
        </p>
        <p>
            <ul>
                <li v-for="country in getFilteredCountries()" :key="country.code">
                    {{country.name}}
                </li>
            </ul>
        </p>
    </section>
    </section>
</template>

<style scoped>

</style>