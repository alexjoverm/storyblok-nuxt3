import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  meta: {
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/@tailwindcss/typography@0.4.x/dist/typography.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/styles/night-owl.min.css"
      }
    ]
  },
  buildModules: [
    [
      "@storyblok/nuxt",
      { accessToken: "WURiWJAFtSd3GteoFyMMkwtt", cache: { type: "none" } }
    ]
  ]
});
