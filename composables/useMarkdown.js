import hljs from "highlight.js";
import { parse, setOptions } from "marked";

export default function () {
  setOptions({
    highlight: (code, lang) => hljs.highlight(lang, code).value
  });

  return { parse };
}
