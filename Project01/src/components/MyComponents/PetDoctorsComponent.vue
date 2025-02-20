<script setup>
//In this component used v-if/v-show rendering.
import { ref, reactive } from "vue";
import syamImg from "@/assets/pictures/abuhurayrasyam.jpg";
import sinhaImg from "@/assets/pictures/sanjidasinha.jpg";

const doctors = reactive([
    {img: syamImg, name: "Dr. Abu Hurayra", gender: 'Male', description: "Dr. Abu Hurayra specializes in small animal medicine and has over 10 years of experience in the field. He is dedicated to providing comprehensive care and ensuring the well-being of every pet he treats."},
    {img: sinhaImg, name: "Dr. Sanjida Sinha", gender: 'Female', description: "With a special interest in surgery and orthopedics, Dr. Sanjida Sinha has been a trusted veterinarian for over 15 years. His expertise and compassionate approach ensure that every pet receives the best possible care."},
    {img: syamImg, name: "Dr. Syam", gender: 'Male', description: "specializes in small animal medicine and has over 10 years of experience in the field. He is dedicated to providing comprehensive care and ensuring the well-being of every pet he treats."}
])
const doctorGender = "female";
</script>

<template>
    <!-- Pet Doctor Section -->
    <section class="bg-[#FFFFFF]">
        <div class="container mx-auto px-10 md:px-20 mb-85">
            <h1 class="adlam-font font-semibold text-[20px] md:text-[30px] mt-8 md:my-8">Meet Our Pet Doctors</h1>
            <div class="flex flex-col md:flex-row items-center justify-between mt-10 md:gap-3">
                <div class="bg-[#FFF9F4] p-6 rounded-lg shadow-lg md:max-w-[400px]" v-for="doctor in doctors" :key="doctor.name" v-show="doctorGender.toLocaleLowerCase() == doctor.gender.toLocaleLowerCase()">
                    <img class="w-[120px] h-[120px] rounded-[50%] border border-[#FFDC26]" :src="doctor.img" alt="">
                    <h2 class="font-semibold text-[15px] md:text-[20px] mt-4">{{ doctor.name.concat(" (").concat(doctor.gender).concat(")")}}</h2>
                    <p class="text-[#454545] mt-2">{{ doctor.description }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>