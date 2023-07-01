import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
    '/zh/rule-set/' : [
        {
            text: '规则集',
            children: [
                '/rule-set/README.md',
                '/rule-set/introduction.md',
                '/rule-set/round-flow.md',
                '/rule-set/take-action.md',
                '/rule-set/game-area.md',
                '/rule-set/elemental-reactions.md',
                '/rule-set/other-rules.md',
            ],

        },
    ],
}