import DefaultTheme, { VuetomUI } from 'vitepress-theme-vuetom'
import { globals } from '../views'
// import '../lang.js'

export default {
  ...DefaultTheme,
  // NotFound,
  // Layout,
  enhanceApp({ app, router, siteData }) {

    // 引用主题
    app.use(VuetomUI)

    // 注册组件
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
    
  }
}
