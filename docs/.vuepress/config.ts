import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";

import { sidebar } from "./configs/sidebar.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "七圣召唤规则集",
  description: "Just playing around",
  base: "/genius-invokation-rule-set/",

  theme: defaultTheme({
    // logo: '/images/hero.png',
    repo: "paladin1013/genius-invokation-gym",
    sidebar,
  }),
});
