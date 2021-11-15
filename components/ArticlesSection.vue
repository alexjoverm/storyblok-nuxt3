<template>
  <section class="container mx-auto py-10" v-editable="blok">
    <h1 class="text-5xl text-gray-700">{{ blok.title }}</h1>

    <div class="grid gap-4 mt-10" :class="[`grid-cols-${blok.grid || 3}`]">
      <ArticleCard
        :article="article"
        v-for="article in articles.stories"
        :key="article.id"
      />
    </div>
  </section>
</template>

<script setup>
const storyapi = useStoryApi();
const { data: articles } = await storyapi.get("cdn/stories", {
  version: "draft",
  starts_with: "articles/",
  resolve_relations: ["Article.author"]
});

const props = defineProps({
  blok: Object,
  authors: Array
});
</script>
