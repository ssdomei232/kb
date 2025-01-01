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
  title: "杂乱的收获",
  description: "杂乱的收获,不想失去",
  srcDir: './src',
  themeConfig: {
    editLink: {
      pattern: 'https://git.mei.lv/mei/kb/_edit/main/docs/:path'
    },
    search: {
      provider: 'local'
    },
    sidebar: generateSidebar(vitepressSidebarOptions),  
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://git.mei.lv/mei/kb' }
    ]
  }
})

