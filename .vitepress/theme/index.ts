import DefaultTheme, { VuetomUI } from 'vitepress-theme-vuetom'
import { globals } from '../views'

export default {
  ...DefaultTheme,
  // NotFound,
  // Layout,
  enhanceApp({ app, router, siteData }) {

    // 引用主题内置UI
    app.use(VuetomUI)

    // 注册自定义全局组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    
  }
}
