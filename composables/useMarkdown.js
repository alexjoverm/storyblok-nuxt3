import { parse, setOptions } from "marked";
import hljs from "highlight.js";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("vue", html);

setOptions({
  highlight: (code, lang) => hljs.highlight(lang, code).value
});

export default function () {
  return { parse };
}
