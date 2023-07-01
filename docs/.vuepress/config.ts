import { defineUserConfig } from "@vuepress/cli";
import { defaultTheme } from "@vuepress/theme-default";

import { sidebar } from "./configs/sidebar.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "七圣召唤规则集",
  description: "七圣召唤规则集",
  base: "/genius-invokation-rule-set/",

  theme: defaultTheme({
    // logo: '/images/hero.png',
    repo: "paladin1013/genius-invokation-rule-set",
    sidebar,
  }),
});
