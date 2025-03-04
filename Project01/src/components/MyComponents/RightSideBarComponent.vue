<script setup>

</script>

<template>
    <div class="flex">
        <!-- Main content area -->
        <div class="flex-grow p-4">
            <RouterView></RouterView>
        </div>

        <!-- Right sidebar -->
        <aside class="w-64 bg-white p-4 shadow-lg">
            <h2 class="text-xl font-semibold mb-4">More Country's</h2>
            
            <div class="flex items-center mb-4">
                <RouterLink :to="{name: 'tag', params: {tag:'us'}}" class="text-lg font-medium">US</RouterLink>
            </div>
            
            <div class="flex items-center mb-4">
                <RouterLink :to="{name: 'tag', params: {tag:'uk'}}" class="text-lg font-medium">UK</RouterLink>
            </div>
        </aside>
    </div>
</template>

<style scoped>

</style>