<script setup>
const props = defineProps({
  customerName: String,
  customerPhone: String,
  addressVal: String,
  distanceVal: String,
})
</script>

<template>
  <div class="shadow-md mb-6">
      <div class="bg-white flex items-center justify-between p-4 border-b">
        <div class="flex flex-col">
          <span class="text-gray-400 font-light">Customer</span
          ><span>{{ customerName }}</span
          ><span class="font-light text-xs">{{ customerPhone }}</span>
        </div>
        <div class="flex gap-3">
          <button
            class="bg-gray-200 flex flex-col items-center py-1 px-3 rounded-lg cursor-pointer"
          >
            <Icon name="i-mdi-message-bubble" class="w-9 h-9" />
            <span class="font-light text-blue-500 text-xs">Msg</span></button
          ><button
            class="bg-gray-200 flex flex-col items-center py-1 px-3 rounded-lg cursor-pointer"
          >
            <Icon name="i-foundation-telephone" class="w-9 h-9" />
            <span class="font-light text-blue-500 text-xs">Call</span>
          </button>
        </div>
      </div>
      <div
        class="bg-white flex items-center justify-between gap-2 p-4 border-b"
      >
        <div class="flex flex-col">
          <span class="text-gray-400 font-light">Pickup address</span
          ><span class="max-w-[200px]">{{ addressVal }}</span
          ><span
            class="font-light text-xs text-blue-500 flex items-center gap-1"
          >
            <Icon name="i-oi-map-marker" class="w-[15px] h-[15px]" />
            {{ distanceVal }} mi away from my location
          </span>
        </div>
        <button class="bg-[#78E677] flex flex-col items-center p-3 rounded-lg">
          <span class="font-light text-white text-xl">GO</span>
        </button>
      </div>
      <div class="bg-white flex flex-col p-4 border-b">
        <span class="text-gray-400 font-light">Address instructions</span
        ><span>Please call 10 min before arrival.</span>
      </div>
    </div>
</template>
