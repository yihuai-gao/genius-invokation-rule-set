import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = [
  {
    text: "七圣召唤规则集",
    link: '/rule-set/',
    children: [
      "/rule-set/introduction.md",
      "/rule-set/round-flow.md",
      "/rule-set/take-action.md",
      "/rule-set/game-area.md",
      "/rule-set/elemental-reactions.md",
      "/rule-set/other-rules.md",
    ],
  },
];
