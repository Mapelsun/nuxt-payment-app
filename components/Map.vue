<script setup>
const ownerLat = ref(6.524379) // Owner's or store's latitude
const ownerLon = ref(3.379206) // Owner's or store's longitude
const targetLat = ref('') // Target latitude
const targetLon = ref('') // Target longitude
const loading = ref(true)

const zoom = ref(15)
const url = ref('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')

const emit = defineEmits(['distance', 'address'])

const getCustomerLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    console.log('Geolocation is not supported by this browser.')
  }

  function showPosition(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    targetLat.value = latitude
    targetLon.value = longitude
    calculateDistance(ownerLat.value, ownerLon.value, targetLat.value, targetLon.value)
    getAddress(ownerLat.value, ownerLat.value)
    loading.value = false
  }
}

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371 // Radius of the earth in kilometers
  const dLat = deg2rad(lat2 - lat1)
  const dLon = deg2rad(lon2 - lon1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  let distance = R * c // Distance in kilometers
  distance = distance * 0.6214 // Distance in miles
  emit('distance', distance.toFixed(2))
  // return distance.toFixed(2)
}

const getAddress = async (lat, lon) => {
const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;

await fetch(url)
  .then(response => response.json())
  .then(data => {
    // Parse the response to get the formatted address
    const address = data.display_name;
    emit('address', address)
  })
  .catch(error => {
    console.log("Error:", error);
  });

}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

onMounted(() => {
  getCustomerLocation()
})
</script>

<template>
  <div class="w-full h-96 bg-blue-300">
    <div v-if="loading" class="space-y-4">
      <USkeleton class="h-20 w-full" />
      <USkeleton class="h-20 w-full" />
      <USkeleton class="h-20 w-full" />
      <USkeleton class="h-20 w-full" />
    </div>
    <LMap v-else ref="map" :zoom="zoom" :center="[ownerLat, ownerLon]">
      <LTileLayer :url="url" layer-type="base" name="OpenStreetMap" />
      <LMarker :lat-lng="[ownerLat, ownerLon]" />
    </LMap>
  </div>
</template>

