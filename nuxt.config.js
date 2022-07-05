export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'currency-site',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.scss',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-simple-alert.js', mode: 'client' },
    '~/plugins/number-formater.js',
    '~/plugins/api-run.js',
  ],

  // dot-env module options
  dotenv: {
    /* module options */
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //https://www.npmjs.com/package/nuxt-clipboard2
    'nuxt-clipboard2',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://sitemap.nuxtjs.org/guide/setup
    '@nuxtjs/sitemap',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    ['cookie-universal-nuxt', { alias: 'cookiz' }],
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    '@nuxtjs/style-resources',
    //https://www.npmjs.com/package/nuxt-vue-multiselect
    'nuxt-vue-multiselect',
    //https://i18n.nuxtjs.org/setup
    '@nuxtjs/i18n',
    // [
    //   '@nuxtjs/recaptcha', {
    //     hideBadge: true,
    //     language: 'fa',
    //     siteKey: process.env.RECAPTCHA_SITEKEY, // Better would be from 'process.env.API_KEY' and with '.env' file
    //     version: 2, // Or 3
    //   }
    // ],
    // https://alireza-ab.ir/datepicker/installation#
    ['@alireza-ab/vue-persian-datepicker/nuxt', { PersianDate: true }]
  ],

  //https://i18n.nuxtjs.org/setup
  // i18n: {
  //   lazy: true,
  //   langDir: 'locales/',
  //   locales: [
  //      {
  //       name: 'English',
  //       code: 'en',
  //       iso: 'en',
  //       file: 'en.js'
  //     },
  //     {
  //       name: 'Farsi',
  //       code: 'fa',
  //       iso: 'fa',
  //       file: 'fa.js'
  //     },
  //  ],
  //   defaultLocale: 'en',
  // },

  // variables address
  styleResources: {
    scss: ['~/assets/css/var.scss']
  },

  // bootstrap-vue config
  bootstrapVue: {
    icons: true,
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'fa-IR',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
