import VuetomTheme from 'vitepress-theme-vuetom'
import { globals } from '../views'

export default {
  ...VuetomTheme,
  enhanceApp({ app, router, siteData }) {
    globals.forEach(([name, Comp]) => {
      app.component(name, Comp)
    })
  }
}
