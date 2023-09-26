<script setup>
const props = defineProps({
  name: String,
})
</script>

<template>
  <UIcon :name="name" class="text-blue-500 w-6 h-6 font-bold" />
</template>
