// vitepress styles ==> /dist/client/theme-default/styles
// import 'vitepress/dist/client/theme-default/styles/fonts.css'
// import 'vitepress/dist/client/theme-default/styles/vars.css'
// import 'vitepress/dist/client/theme-default/styles/base.css'
// import 'vitepress/dist/client/theme-default/styles/utils.css'
// import 'vitepress/dist/client/theme-default/styles/components/custom-block.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-code.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-doc.css'
// import 'vitepress/dist/client/theme-default/styles/components/vp-sponsor.css'
// rewrite docs styles
import './styles/vars.css';
// vuetom blog docs scss
// dev : '../styles/rewrite/index.scss'
// prod: '../css/rewrite/index.css'
import '../css/rewrite/index.css';
import NotFound from 'vitepress/dist/client/theme-default/NotFound.vue';
import VTLayout from './components/VTLayout.vue';
const theme = {
    Layout: VTLayout,
    NotFound
};
export default theme;
