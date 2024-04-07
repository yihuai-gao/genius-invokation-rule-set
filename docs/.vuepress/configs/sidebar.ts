import type { SidebarConfig } from "@vuepress/theme-default";

export const sidebar: SidebarConfig = [
  {
    text: "官方规则书",
    link: '/rule-set/',
    children: [
      "/rule-set/introduction.md",
      "/rule-set/round-flow.md",
      "/rule-set/take-action.md",
      "/rule-set/game-area.md",
      "/rule-set/elemental-reactions.md",
      "/rule-set/other-rules.md",
      "/rule-set/special-entry.md",
    ],
  },
  "/new"
  // {
  //   text: "笔记（仅供参考）",
  //   link: "/notes/",
  //   children: [
  //     "/notes/generic",
  //     "/notes/errata",
  //     "/notes/visibility",
  //   ]
  // }
];
