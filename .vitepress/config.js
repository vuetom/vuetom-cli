require('sucrase/register/ts')
const { resolve } = require('path')
const { mdPlugin } = require('./utils/plugins.ts')
const { nav } = require('./config/nav.ts')
const { sidebar } = require('./config/sidebars.ts')
const { languages } = require('./utils/lang.ts')

// eslint-disable-next-line no-console
console.log(`DOC_ENV: ${process.env.DOC_ENV}`)

const locales = {
  '/zh-CN': {
    label: '简体中文',
    lang: 'zh-CN'
  },
  '/en-US': {
    label: 'English',
    lang: 'en-US'
  }
}

languages.forEach((lang) => {
  locales[`/${lang}`] = {
    label: lang,
    lang,
  }
})

exports.locales = locales

module.exports = {
  title: 'Vuetom',
  base: '/',
  dest: 'public',
  theme: 'vuetom',
  // theme: require.resolve('../../vuetom'), // 使用本地主题包
  // hmr: { overlay: false },
  head: getHead(),
  themeConfig: {
    docsDir: 'docs',
    author: 'lauset',
    smoothScroll: true,
    sidebar,
    nav,
    langs: locales,
    logoImg: '/logo/vuetom-logo.png',
    logoIcon: '/logo/vuetom-logo-s.png',
    bgImg: '/imgs/homg-bg01.jpg',
    bgColor: '0,0,0',
    bgOpacity: 0.6,
    pageBgEnable: true,
    pageBgOpacity: 0.6,
  },
  locales,
  markdown: {
    config: (md) => mdPlugin(md)
  }
}

function getHead() {
  return [
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/logo/vuetom-logo-s.png' }]
  ]
}
