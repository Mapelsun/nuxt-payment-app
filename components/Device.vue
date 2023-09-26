<script setup>
const props = defineProps({
  name: String,
  description: String,
  price: Number,
  imageSrc: String,
})

const emit = defineEmits(['showModal', 'selectedImage'])

const showModal = (src) => {
  emit('showModal', true)
  emit('selectedImage', src)
}
</script>

<template>
  <div class="bg-white p-4 border-b">
    <div class="flex items-center justify-between w-full">
      <span>Devices</span>
      <Icon name="i-fe-elipsis-h" class="text-red-500" />
    </div>
    <div class="flex items-center justify-between">
      <div class="flex gap-2">
        <img :src="imageSrc" alt="" class="w-10 object-cover" />
        <div class="flex flex-col">
          <span class="text-sm">{{ name }}</span
          ><span class="text-gray-400 font-light text-sm">{{
            description
          }}</span
          ><span class="font-light text-sm text-blue-500">
            Estimated offer ${{ price }}
          </span>
        </div>
      </div>
      <button
        @click="showModal(imageSrc)"
        class="rounded-lg bg-[#FF005B] text-white p-2 font-light text-sm"
      >
        Start inspection
      </button>
    </div>
  </div>
</template>

