import { defineConfig } from 'vitepress';
import { generateSidebar } from "vitepress-sidebar";  

const vitepressSidebarOptions = {  
  documentRootPath: "/docs/src",  
  collapsed: false, //折叠组关闭
  collapseDepth: 2, //折叠组2级菜单
  removePrefixAfterOrdering: true, //删除前缀，必须与prefixSeparator一起使用
  prefixSeparator: "_", //删除前缀的符号
}; 

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  lang: 'zh-CN',
  title: "mei's knowledge base",
  description: "mei's knowledge base",
  srcDir: './src',
  themeConfig: {
    logo: '/favicon.ico',
    footer: {
      message: 'Released under the <a href="https://git.mei.lv/mei/kb/src/branch/main/LICENSE">CC-BY-NC-SA-4.0</a> License.',
      copyright: 'Copyright © 2009-2025 <a href="https://github.com/ssdomei232">mei</a>'
    },
    editLink: {
      pattern: 'https://git.mmeiblog.cn/mei/kb/_edit/main/docs/src/:path'
    },
    search: {
      provider: 'local'
    },
    sidebar: generateSidebar(vitepressSidebarOptions),  
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '关于', link: '/01_about' }
    ],
    socialLinks: [
      { icon: 'gitea', link: 'https://git.mmeiblog.cn/mei/kb' }
    ]
  }
})

