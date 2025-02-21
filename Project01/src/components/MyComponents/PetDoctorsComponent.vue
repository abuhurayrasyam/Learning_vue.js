<script setup>
// v-if, v-show & v-for Rendering & Importing External Data.
import syamImg from "@/assets/pictures/abuhurayrasyam.jpg";
import sinhaImg from "@/assets/pictures/sanjidasinha.jpg";
import {doctorGender} from "@/Data/data"; // external data come from DataFolder/data.js

const doctors = [
    {img: syamImg, name: "Dr. Abu Hurayra", gender: 'Male', description: "Dr. Abu Hurayra specializes in small animal medicine and has over 10 years of experience in the field. He is dedicated to providing comprehensive care and ensuring the well-being of every pet he treats."},
    {img: sinhaImg, name: "Dr. Sanjida Sinha", gender: 'Female', description: "With a special interest in surgery and orthopedics, Dr. Sanjida Sinha has been a trusted veterinarian for over 15 years. His expertise and compassionate approach ensure that every pet receives the best possible care."},
    {img: syamImg, name: "Dr. Syam", gender: 'Male', description: "specializes in small animal medicine and has over 10 years of experience in the field. He is dedicated to providing comprehensive care and ensuring the well-being of every pet he treats."}
]
</script>

<template>
    <section class="bg-[#FFFFFF]">
        <div class="container mx-auto px-10 md:px-20 mb-85">
            <h1 class="adlam-font font-semibold text-[20px] md:text-[30px] mt-8 md:my-8">Meet Our Pet Doctors</h1>
            <!-- v-if Rendering -->
            <h4 v-if="doctorGender.toLocaleLowerCase() == 'male'">We are Showing all Male Doctors</h4>
            <h4 v-else-if="doctorGender.toLocaleLowerCase() == 'female'">We are Showing all Female Doctors</h4>
            <!-- v-if Rendering -->
            <div class="flex flex-col md:flex-row items-center justify-between mt-10 md:gap-3">
                <!-- v-show & v-for Rendering -->
                <div class="bg-[#FFF9F4] p-6 rounded-lg shadow-lg md:max-w-[400px]" v-for="doctor in doctors" :key="doctor.name" v-show="doctorGender.toLocaleLowerCase() == doctor.gender.toLocaleLowerCase()">
                    <img class="w-[120px] h-[120px] rounded-[50%] border border-[#FFDC26]" :src="doctor.img" alt="">
                    <h2 class="font-semibold text-[15px] md:text-[20px] mt-4">{{ doctor.name.concat(" (").concat(doctor.gender).concat(")")}}</h2>
                    <p class="text-[#454545] mt-2">{{ doctor.description }}</p>
                </div>
                <!-- v-show & v-for Rendering -->
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>