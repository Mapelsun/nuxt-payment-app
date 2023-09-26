<script setup>
</script>

<template>
  <main class="bg-gray-100 mb-20">
    <div class="w-full h-96 bg-green-300">
    </div>
    <div class="bg-white border-b">
      <div class="flex gap-4 justify-between px-6 py-2 w-11/12 mx-auto mb-6">
        <div class="flex gap-2">
          <span class="text-blue-500 text-sm border border-blue-500 rounded-full px-2 py-1 flex items-center">Offer
            #T216</span>
          <span class="bg-[#F9D89C] text-sm rounded-full px-2 py-1 flex items-center">Pending payment</span>
        </div>
        <span class="bg-gray-200 text-sm rounded-full px-2 py-1 flex items-center">Assigned</span>
      </div>
      <div class="flex justify-between px-6 text-sm w-11/12 mx-auto mb-6">
        <div class="flex items-center gap-2">
          <Icon name="i-teenyicons-calculator-outline" class="w-9 h-9" />
          <div class="flex flex-col">
            <span class="text-gray-400 font-light">Date</span><span class="font-medium">March 6</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <Icon name="i-streamline-interface-time-clock-square-clock-loading-frame-measure-time-circle" class="w-9 h-9" />
          <div class="flex flex-col">
            <span class="text-gray-400 font-light">Time</span><span class="font-medium">11 am - 12 pm</span>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-between rounded-lg bg-blue-100 border border-blue-600 mx-6 mb-4 px-10 py-5">
        <span>You will earn</span>
        <span class="text-blue-500 text-2xl">$30</span>
      </div>
    </div>
    <div class="shadow-md mb-6">
      <div class="bg-white flex items-center justify-between p-4 border-b">
        <div class="flex flex-col">
          <span class="text-gray-400 font-light">Customer</span><span>Christopher Nunez</span><span
            class="font-light text-xs">+1
            (516) 812-9200</span>
        </div>
        <div class="flex gap-3">
          <button class="bg-gray-200 flex flex-col items-center py-1 px-3 rounded-lg">
            <Icon name="i-mdi-message-bubble" class="w-9 h-9" />
            <span class="font-light text-blue-500 text-xs">Msg</span>
          </button><button class="bg-gray-200 flex flex-col items-center py-1 px-3 rounded-lg">
            <Icon name="i-foundation-telephone" class="w-9 h-9" />
            <span class="font-light text-blue-500 text-xs">Call</span>
          </button>
        </div>
      </div>
      <div class="bg-white flex items-center justify-between p-4 border-b">
        <div class="flex flex-col">
          <span class="text-gray-400 font-light">Pickup address</span><span>3001 Fulton St,
            Brooklyn,</span><span>NY 11208</span><span class="font-light text-xs text-blue-500 flex items-center gap-1">
            <Icon name="i-oi-map-marker" class="w-[15px] h-[15px]" /> 1.5 mi away from my location
          </span>
        </div>
        <button class="bg-[#78E677] flex flex-col items-center p-3 rounded-lg">
          <span class="font-light text-white text-xl">GO</span>
        </button>
      </div>
      <div class="bg-white flex flex-col p-4 border-b">
        <span class="text-gray-400 font-light">Address instructions</span><span>Please call 10 min before arrival.</span>
      </div>
    </div>
    <div class="shadow-md mb-6">
      <div class="bg-white p-4 border-b">
        <div class="flex items-center justify-between w-full"><span>Devices</span>
          <Icon name="i-fe-elipsis-h" class="text-red-500" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex gap-2">
            <img src="~/assets/img/phone.png" alt="" class="w-10 object-cover" />
            <div class="flex flex-col"><span class="text-sm">iPhone 13 Pro Max</span><span
                class="text-gray-400 font-light text-sm">128GB - Unlocked -
                Flawless</span><span class="font-light text-sm text-blue-500">
                Estimated offer $750
              </span></div>
          </div>
          <button class="rounded-lg bg-[#FF005B] text-white p-2 font-light text-sm">Start inspection</button>
        </div>
      </div>
      <div class="bg-white p-4 border-b">
        <div class="flex items-center justify-between w-full"><span>Devices</span>
          <Icon name="i-fe-elipsis-h" class="text-red-500" />
        </div>
        <div class="flex items-center justify-between">
          <div class="flex gap-2">
            <img src="~/assets/img/phone.png" alt="" class="w-10 object-cover" />
            <div class="flex flex-col"><span class="text-sm">iPhone 13</span><span
                class="text-gray-400 font-light text-sm">128GB - Unlocked -
                Good</span><span class="font-light text-sm text-blue-500">
                Estimated offer $550
              </span></div>
          </div>
          <button class="rounded-lg bg-[#FF005B] text-white p-2 font-light text-sm">Start inspection</button>
        </div>
      </div>
    </div>
    <div class="bg-white border-b p-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center gap-3 mb-4">
          <Icon name="i-pepicons-pencil-countdown" class="text-[#936E2D] font-bold" />
          <span class="text-lg">Payment pending</span>
        </div>
        <Icon name="i-fe-elipsis-h" class="text-red-500" />
      </div>
      <div class="flex justify-between items-center text-sm mb-5">
        <div class="flex flex-col">
          <span>Subtotal</span>
        <span class="text-gray-400 text-xs">2 Devices</span>
        </div>
        <span>$1,300</span>
      </div>
      <div class="flex flex-col text-sm mb-3">
        <span>Payment Method</span>
        <span class="text-gray-400 font-light text-xs">Cashapp: <span class="text-blue-500">$scga12</span></span>
      </div>
      <div class="flex justify-between text-sm">
        <span>Total</span>
        <span>$1,300</span>
      </div>
    </div>
    <div class="bg-white flex items-center justify-center pt-4 pb-10">
      <button class="rounded-lg bg-[#0C3455] text-white py-2 px-10 text-xl font-light">Send Payment</button>
    </div>
    <NavBar />
  </main>
</template>

