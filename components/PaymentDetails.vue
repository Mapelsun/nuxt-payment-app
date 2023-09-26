<script setup>
const props = defineProps({
  cashAppTag: String,
  totalProducts: Number,
  totalAmount: Number,
})
</script>

<template>
  <div class="bg-white border-b p-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-3 mb-4">
        <Icon
          name="i-pepicons-pencil-countdown"
          class="!text-[#936E2D] font-bold"
        />
        <span class="text-lg">Payment pending</span>
      </div>
      <Icon name="i-fe-elipsis-h" class="text-red-500" />
    </div>
    <div class="flex justify-between items-center text-sm mb-5">
      <div class="flex flex-col">
        <span>Subtotal</span>
        <span class="text-gray-400 text-xs">{{ totalProducts }} Devices</span>
      </div>
      <span>${{ totalAmount.toLocaleString() }}</span>
    </div>
    <div class="flex flex-col text-sm mb-3">
      <span>Payment Method</span>
      <span class="text-gray-400 font-light text-xs"
        >Cashapp: <span class="text-blue-500">{{ cashAppTag }}</span></span
      >
    </div>
    <div class="flex justify-between text-sm">
      <span>Total</span>
      <span>${{ totalAmount.toLocaleString() }}</span>
    </div>
  </div>
</template>

