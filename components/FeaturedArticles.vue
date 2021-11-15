<template>
  <section class="container max-w-screen-lg mx-auto py-10" v-editable="blok">
    <h1 class="text-5xl text-gray-700">{{ blok.title }}</h1>

    <div class="grid grid-cols-2 gap-4 mt-10">
      <ArticleCard
        :article="article"
        v-for="article in articles"
        :key="article.id"
      />
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  blok: Object,
  authors: Array
});

const articles = computed(() =>
  useWithAuthors(props.blok.articles, props.authors)
);
</script>
