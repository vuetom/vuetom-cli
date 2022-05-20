// .vitepress/theme/index.js
import VuetomTheme from 'vitepress-theme-vuetom'
import { globals } from '../views'

export default {
  ...VuetomTheme,
  // NotFound,
  // Layout,
  enhanceApp({ app, router, siteData }) {
    // 注册组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
