import { parse, setOptions } from "marked";
import hljs from "highlight.js";
import html from "highlight.js/lib/languages/xml";

hljs.registerLanguage("vue", html);

setOptions({
  highlight: (code, language) => hljs.highlight(code, { language }).value
});

export default () => {
  return { parse };
};
