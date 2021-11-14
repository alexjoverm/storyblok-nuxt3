<template>
  <nuxt-link
    :to="`/${article.full_slug}`"
    class="flex flex-col justify-between shadow p-4 rounded"
  >
    <header class="text-2xl font-semibold text-gray-700 leading-normal">
      {{ article.content.title }}
    </header>
    <p class="text-gray-600 mt-4">{{ article.content.description }}</p>
    <div class="flex align-center mt-4">
      <div class="w-12">
        <img
          class="border-2 border-gray-700 rounded-full"
          :src="article.content.author.content.image"
          alt=""
        />
      </div>
      <div class="flex-1 text-gray-700 ml-4">
        <p class="font-semibold">{{ article.content.author.content.name }}</p>
        <p>{{ article.first_published_at }}</p>
      </div>
    </div>
  </nuxt-link>
</template>

<script setup>
const props = defineProps({
  article: Object
});
</script>
