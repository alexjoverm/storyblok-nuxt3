<template>
  <section v-editable="blok" :class="{ 'bg-gray-700': blok.dark }">
    <div class="flex container max-w-screen-lg mx-auto py-10 px-12">
      <a :href="blok.link.url" class="w-2/5 block w-32 px-2">
        <img
          class="block w-48 transform rotate-6 mx-auto"
          :src="blok.image.filename"
          alt=""
        />
      </a>
      <div
        class="flex flex-col justify-around flex-1"
        :class="{ 'text-white': blok.dark }"
      >
        <h2 class="block text-semibold text-4xl">{{ blok.title }}</h2>
        <p class="block text-lg">{{ blok.description }}</p>
        <a
          :href="blok.link.url"
          class="
            inline-blok
            bg-green-500
            text-white
            rounded
            px-4
            py-3
            mx-auto
            text-lg
          "
        >
          {{ blok.link_text }}
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({ blok: Object });
</script>
