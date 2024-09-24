import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Kle-Transcoding",
  description: "",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '使用协议', link: '/agreement' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fc221/kle-transcodingDocs' }
    ],
    footer: {
      message: '本程序不提供任何数据，自行维护数据请在符合当地法律的前提下使用！',
      copyright: 'Copyright © 2024-present Kle-Transcoding'
    }
  }
})
