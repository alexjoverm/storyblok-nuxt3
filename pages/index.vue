<template>
  <div v-editable="story.content">
    <component
      :blok="blok"
      :is="blok.component"
      v-for="blok in story.content.body"
      :key="blok._uid"
    />
  </div>
</template>

<script setup>
const storyapi = useStoryApi();
const { data } = await storyapi.get("cdn/stories/home", {
  version: "draft",
  resolve_relations: ["FeaturedArticles.articles", "Article.author"]
});

const story = data.story;

onMounted(() => {
  console.log(story);
  storyapi.get("cdn/stories/home", {
    version: "draft",
    resolve_relations: ["FeaturedArticles.articles", "Article.author"]
  });
  useStoryBridge(data.story.id, (story) => (data.story = story));
});
</script>
