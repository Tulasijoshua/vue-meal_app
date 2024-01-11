<template>
    <div class="h-full">
    <Navbar />
    <main>
      <div class="max-w-[1200px] mx-auto">
        <router-view />
      </div>
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