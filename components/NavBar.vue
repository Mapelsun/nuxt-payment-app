<script setup>
</script>

<template>
  <div
    class="fixed bg-white bottom-0 left-0 right-0 border-t flex items-center justify-between p-4 [&_a]:flex [&_a]:flex-col [&_a]:items-center [&_span]:text-xs">
    <NuxtLink to="/chats">
      <Icon name="i-carbon-chat" />
      <span>Chats</span>
    </NuxtLink>
    <NuxtLink to="/schedule">
      <Icon name="i-teenyicons-calculator-outline" />
      <span>Schedule</span>
    </NuxtLink>
    <NuxtLink to="/pickups">
      <Icon name="i-oi-map-marker" />
      <span>Pickups</span>
    </NuxtLink>
    <NuxtLink to="/earnings">
      <Icon name="i-la-coins" />
      <span>Earnings</span>
    </NuxtLink>
    <NuxtLink to="/account">
      <Icon name="i-tdesign-user" />
      <span>Account</span>
    </NuxtLink>
  </div>
</template>