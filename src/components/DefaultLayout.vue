<template>
    <div class="bg-gray-100 h-full">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import Navbar from './Navbar.vue';

    export default {
    components: { Navbar }
}
</script>

<style scoped>

</style>