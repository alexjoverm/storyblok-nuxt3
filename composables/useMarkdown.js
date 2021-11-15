import { parse, setOptions } from "marked";
import hljs from "highlight.js/lib/core";
import html from "highlight.js/lib/languages/xml";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("vue", html);
hljs.registerLanguage("js", javascript);

setOptions({
  highlight: (code, lang) => hljs.highlight(lang, code).value
});

export default function () {
  return { parse };
}
