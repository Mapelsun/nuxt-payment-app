<script setup>
const { pending, data, error } = await useFetch('/api/data')
const distanceVal = ref('')
const addressVal = ref('')
const isOpen = ref(false)
const selectedImageSrc = ref('')
const base64Img = ref('')
const toast = useToast()

const sumProductsTotal = (products) => {
  let totalPrice = 0
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price
  }
  return totalPrice
}

const getImageAsBase64 = async (imageUrl) => {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'

    img.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(this, 0, 0)

      const dataURL = canvas.toDataURL('image/png')
      resolve(dataURL)
    }

    img.onerror = function () {
      reject(new Error('Failed to load the image.'))
    }

    img.src = imageUrl
  })
}

const processImage = async () => {
  try {
    const base64String = await getImageAsBase64(selectedImageSrc.value)
    base64Img.value = base64String
    toast.add({
      title: 'Image saved.',
      description:
        'The image has been saved successfully as a base64 string in a variable.',
    })
    isOpen.value = false
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main class="bg-gray-100 mb-20">
    <Map
      @distance="(val) => (distanceVal = val)"
      @address="(val) => (addressVal = val)"
    />
    <OrderDetails
      :offerNo="data.offerNo"
      :offerDate="data.offerDate"
      :offerTime="data.offerTime"
      :earnings="data.earnings"
    />
    <AddressDetails
      :customerName="data.customerName"
      :customerPhone="data.customerPhone"
      :addressVal="addressVal"
      :distanceVal="distanceVal"
    />
    <div class="shadow-md mb-6">
      <Device
        v-for="product in data.products"
        :key="product.name"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image-src="product.imageSrc"
        @showModal="(val) => (isOpen = val)"
        @selectedImage="(val) => (selectedImageSrc = val)"
      />
    </div>
    <PaymentDetails
      :cashAppTag="data.cashAppTag"
      :totalProducts="data.products.length"
      :totalAmount="sumProductsTotal(data.products)"
    />
    <div class="bg-white flex items-center justify-center pt-4 pb-10">
      <button
        class="rounded-lg bg-[#0C3455] text-white py-2 px-10 text-xl font-light"
      >
        Send Payment
      </button>
    </div>
    <NavBar />
  </main>
  <UModal v-model="isOpen">
    <div class="p-4">
      <img
        @click="processImage"
        class="cursor-pointer"
        :src="selectedImageSrc"
        alt=""
      />
    </div>
  </UModal>
</template>

