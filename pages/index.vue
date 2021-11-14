<template>
  <div v-editable="state.story.content">
    <component
      :blok="blok"
      :authors="authors.stories"
      :is="blok.component"
      v-for="blok in state.story.content.body"
      :key="blok._uid"
    />
  </div>
</template>

<script setup>
const storyapi = useStoryApi();
const { data: home } = await storyapi.get("cdn/stories/home", {
  version: "draft",
  resolve_relations: ["FeaturedArticles.articles"]
});
const { data: authors } = await storyapi.get("cdn/stories", {
  version: "draft",
  starts_with: "authors/"
});

const state = reactive({ story: home.story });

onMounted(() => {
  useStoryBridge(state.story.id, async (story) => (state.story = story), {
    resolveRelations: ["FeaturedArticles.articles"]
  });
});
</script>
