import { defineUserConfig } from '@vuepress/cli'
// import { defaultTheme } from '@vuepress/theme-default'

import {
  // head,
  // navbarEn,
  // navbarZh,
  // sidebarEn,
  sidebarZh,
} from './configs/index.js'

import pkg from '@vuepress/theme-default';
const { defaultTheme } = pkg;

export default defineUserConfig({
  lang: 'zh-CN',
  title: '七圣召唤规则集',
  description: 'Just playing around',
  base: '/',

  // theme: defaultTheme({
  //   // logo: '/images/hero.png',
  //   repo: 'paladin1013/genius-invokation-gym',
  //   docsDir: 'docs',
  //   locales: {
  //     '/': {
  //       // // navbar
  //       // navbar: navbarEn,
  //       // sidebar
  //       sidebar: sidebarZh,
  //       // page meta
  //       editLinkText: '在Github中编辑',
  //     },
  //   },
  // })
})