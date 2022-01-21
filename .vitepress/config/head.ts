import type { HeadConfig } from 'vitepress'

const head: HeadConfig[] = [
  [
    'meta',
    {
      name: 'viewport',
      content:
            'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
    }
  ],
  ['link', { rel: 'icon', href: '/logo/vuetom-logo-s.png' }],
]

export default head