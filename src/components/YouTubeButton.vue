<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="px-3 py-2 text-white rounded border-2 border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
    >
      <slot>YouTube</slot>
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
    href: String
})
</script>

<style scoped></style>
