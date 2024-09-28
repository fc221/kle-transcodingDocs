import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Kle-Transcoding",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "指南", link: "/guide/start" },
      { text: "使用协议", link: "/agreement" },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '指南',
        items: [
          { text: '开始', link: '/guide/start' },
        ]
      },
      {
        text: '使用协议',
        link: "/agreement"
      }
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/fc221/kle-transcodingDocs" },
    ],
    footer: {
      message:
        "本程序不提供任何数据，自行维护数据请在符合当地法律的前提下使用！",
      copyright: "Copyright © 2024-present Kle-Transcoding",
    },

    search: {
      provider: "local",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});
