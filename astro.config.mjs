import { defineConfig } from 'astro/config';
import rehypePrettyCode from "rehype-pretty-code";


// https://astro.build/config
export default defineConfig({
  markdown: {
    syntaxHighlight: false,
    rehypePlugins: [[rehypePrettyCode, {

    }]],
  }
});
