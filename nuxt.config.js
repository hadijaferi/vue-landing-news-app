export default {
  ssr: true,
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'همتا',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' }
    ],
    script: [
      { src: '/vendor/charting_library/charting_library.js', type: 'text/javascript' },
      { src: '/vendor/datafeeds/polyfills.js', type: 'text/javascript' },
      { src: '/vendor/datafeeds/bundle.js', type: 'text/javascript' },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/style-rtl.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios',
    { src: '@/plugins/particles', mode: 'client' },
    { src: '@/plugins/persian-datetime-picker', mode: 'client' },
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/base/',
        prefix: 'Base'
      },
      {
        path: '~/components/dialog/',
        prefix: 'Dialog'
      },
      {
        path: '~/components/side/',
        prefix: 'Side'
      },
      {
        path: '~/components/analysis/',
        prefix: 'A'
      },
      {
        path: '~/components/baskets/',
        prefix: 'B'
      },
      {
        path: '~/components/news/',
        prefix: 'News'
      },
      {
        path: '~/components/profile/',
        prefix: 'Profile'
      },
      {
        path: '~/components/trading_view/',
        prefix: 'TV'
      },
      {
        path: '~/components/swiper/',
        prefix: 'Swiper'
      }
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    ['@nuxtjs/vuetify', { rtl: true }],
    ['nuxt-moment-jalaali', { locales: ['fa'], dialect: 'persian-modern' }],
    // 'nuxt-purgecss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/axios',
    'nuxt-vuex-localstorage',
    // '@nuxtjs/moment',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  generate: {
    subFolders: false
  },

  env: {
    // baseUrl: 'https://localhost:44301',
    baseUrl: 'https://host.hamfekran.com',
  },

  axios: {
    // baseURL: 'https://localhost:44301',
    baseUrl: 'https://host.hamfekran.com',
  },

  // router: {
  //   base: '/dist/'
  // }

  // publicRuntimeConfig: {
  //   axios: {
  //     browserBaseURL: process.env.BROWSER_BASE_URL
  //   }
  // },

  // privateRuntimeConfig: {
  //   axios: {
  //     baseURL: process.env.BASE_URL
  //   }
  // },
}
