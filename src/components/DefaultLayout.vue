<template>
    <div class="h-full">
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