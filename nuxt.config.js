import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      }
    ]
  },
  buildModules: [
    [
      "@storyblok/nuxt",
      { accessToken: "WURiWJAFtSd3GteoFyMMkwtt", cache: { type: "none" } }
    ]
  ],
  vite: false
});
