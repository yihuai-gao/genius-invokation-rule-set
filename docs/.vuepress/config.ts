import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";
import { getDirname, path } from '@vuepress/utils'
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import katex from "@neilsustc/markdown-it-katex";

import { sidebar } from "./configs/sidebar.js";
import { navbar } from "./configs/navbar.js";

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: "zh-CN",
  title: "七圣召唤规则集",
  description: "七圣召唤规则集",
  base: "/genius-invokation-rule-set/",

  theme: defaultTheme({
    // logo: '/images/hero.png',
    repo: "paladin1013/genius-invokation-rule-set",
    sidebar,
    navbar,
    docsDir: "docs",
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
  ],
  extendsMarkdown: (md) =>{
    md.use(katex);
  }
});
