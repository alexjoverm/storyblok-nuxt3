<template>
  <div>
    <main class="container mx-auto">
      <header class="text-lg max-w-prose mx-auto mt-12">
        <h1
          class="text-gray-700 text-5xl text-center font-semibold leading-tight"
        >
          {{ article.content.title }}
        </h1>
        <div class="mt-8">
          <div class="flex align-center mt-4">
            <div class="w-12">
              <img
                class="border-2 border-gray-700 rounded-full"
                :src="article.content.author.content.image"
                alt=""
              />
            </div>
            <div class="flex flex-1 text-gray-700 ml-4">
              <div>
                <p class="font-semibold">
                  {{ article.content.author.content.name }}
                </p>
                <p>{{ date }}</p>
              </div>
              <div class="flex-1 self-end text-right">{{ views }} reads</div>
            </div>
          </div>
        </div>
      </header>
      <article
        class="prose prose-lg prose-green mt-12 mx-auto"
        v-html="content"
      ></article>
    </main>
  </div>
</template>

<script setup>
const route = useRoute();
const storyapi = useStoryApi();
const { parse } = useMarkdown();

const { slug } = route.params;
const { data } = await storyapi.get(`cdn/stories/articles/${slug}`, {
  version: "draft",
  resolve_relations: ["Article.author"]
});

// Count views on this article
const { data: dataViews } = await useFetch("/api/count", {
  params: { path: slug }
});
const views = dataViews.value.count;

const article = reactive(data.story);

const date = computed(() =>
  new Date(article.content.date).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  })
);
const content = computed(() => parse(article.content.content));

onMounted(async () => {
  useStoryBridge(article.id, (story) => Object.assign(article, story), {
    resolveRelations: ["Article.author"]
  });
});
</script>
