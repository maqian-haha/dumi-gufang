import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  // locales: [
  //   { id: 'zh-CN', name: '中文', },
  //   { id: 'en-US', name: 'English', }
  // ],
  themeConfig: {
    name: 'LL',
    // nav: {
    //   'zh-CN': [{ title: '产品与服务', link: '/product-and-servies' }],
    //   'en-US': [{ title: 'product and service', link: '/en-US/product-and-servies' }],
    // },
    logo: '/favicon.ico',
    favicons: ['/favicon.ico'],
    footer: false,
  },
  scripts: [
    `window.onload=function(){
      document.getElementsByClassName('dumi-default-logo')[0].onclick=function(){
        this.href="/product-and-servies";
        return false;
      };
    }
    if(window.location.pathname==='/') {
      window.location.href='/product-and-servies'
    }
    `,
  ],
});
