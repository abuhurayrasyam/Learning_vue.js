<script setup>
// Connected all MyComponents Files.
import NavComponent from './components/MyComponents/NavComponent.vue';
import AreaComponent from './components/MyComponents/AreaComponent.vue';
//import AreaDetailsComponent from './components/MyComponents/AreaDetailsComponent.vue';
import AreaDetailsFullReactiveComponent from './components/MyComponents/AreaDetailsFullReactiveComponent.vue';
import ImageCarouselComponent from './components/MyComponents/ImageCarouselComponent.vue';
import CategoriesComponent from './components/MyComponents/CategoriesComponent.vue';
import PetDoctorsComponent from './components/MyComponents/PetDoctorsComponent.vue';
</script>

<template>
  <section>
    <div>
        <NavComponent/>
    </div>
    <div>
      <AreaComponent/>
    </div>
    <div>
      <AreaDetailsFullReactiveComponent/>
    </div>
    <div>
      <ImageCarouselComponent/>
    </div>
    <div>
        <CategoriesComponent/>
    </div>
    <div>
        <PetDoctorsComponent/>
    </div>
  </section>
</template>

<style scoped>
   
</style>
