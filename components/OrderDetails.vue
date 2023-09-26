<script setup>
const props = defineProps({
  offerNo: String,
  offerDate: String,
  offerTime: String,
  earnings: Number,
})
</script>

<template>
  <div class="bg-white border-b">
    <div class="flex gap-4 justify-between px-6 py-2 w-11/12 mx-auto mb-6">
      <div class="flex gap-2">
        <span
          class="text-blue-500 text-sm border border-blue-500 rounded-full px-2 py-1 flex items-center"
          >Offer #{{ offerNo }}</span
        >
        <span
          class="bg-[#F9D89C] text-sm rounded-full px-2 py-1 flex items-center"
          >Pending payment</span
        >
      </div>
      <span class="bg-gray-200 text-sm rounded-full px-2 py-1 flex items-center"
        >Assigned</span
      >
    </div>
    <div class="flex justify-between px-6 text-sm w-11/12 mx-auto mb-6">
      <div class="flex items-center gap-2">
        <Icon name="i-teenyicons-calculator-outline" class="w-9 h-9" />
        <div class="flex flex-col">
          <span class="text-gray-400 font-light">Date</span
          ><span class="font-medium">{{ offerDate }}</span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <Icon
          name="i-streamline-interface-time-clock-square-clock-loading-frame-measure-time-circle"
          class="w-9 h-9"
        />
        <div class="flex flex-col">
          <span class="text-gray-400 font-light">Time</span
          ><span class="font-medium">{{ offerTime }}</span>
        </div>
      </div>
    </div>
    <div
      class="flex items-center justify-between rounded-lg bg-blue-100 border border-blue-600 mx-6 mb-4 px-10 py-5"
    >
      <span>You will earn</span>
      <span class="text-blue-500 text-2xl">${{ earnings }}</span>
    </div>
  </div>
</template>

