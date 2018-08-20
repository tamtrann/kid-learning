import bodyParser from 'body-parser'
import session from 'express-session'
import sessionstore from 'sessionstore'
// var MongoStore = require('connect-mongo')(session)

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'E-School',
    meta: [
      {
        charset: 'utf-8'
      }, {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }, {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700|Pathway+Gothic' +
            '+One'
      }, {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css',
        integrity: 'sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp',
        crossorigin: 'anonymous'
      }
    ],
    script: [
      {
        src: 'https://www.gstatic.com/charts/loader.js'
      }
    ]
  },
  plugins: [
    {
      src: '~plugins/element-ui'
    }, {
      src: '~plugins/vue-chartkick'
    }, {
      src: '~plugins/vue-countdown'
    }, {
      src: '~plugins/vue-js-modal'
    }, {
      src: '~plugins/vue-observe-visibility'
    }, {
      src: '~plugins/vue-mindmap'
    }, {
      src: '~plugins/vue-moment'
    }, {
      src: '~plugins/vue-chartkick'
    }, {
      src: '~plugins/vue-scroll-reveal',
      ssr: false
    }, {
      src: '~plugins/vuikit'
    }
  ],
  serverMiddleware: [
    bodyParser.json(),
    session({
      store: sessionstore.createSessionStore(),
      secret: 'super-secret-key',
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 600000
      }
    }),
    '~/api'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3b8070'
  },
  router: {
    middleware: ['auth']
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'axios',
      'element-ui',
      'vue-chartkick',
      '@xkeshi/vue-countdown',
      'vue-js-modal',
      'vue-mindmap',
      'vue-moment',
      'vue-observe-visibility',
      'vue-scroll-reveal',
      'vuikit'
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev}) {
      if (isDev && process.client) {
        config
          .module
          .rules
          .push({enforce: 'pre', test: /\.(js|vue)$/, loader: 'eslint-loader', exclude: /(node_modules)/})
      }
    }
  },
  modules: [
    ['nuxt-sass-resources-loader'],
    [
      'nuxt-google-maps-module', {
        key: 'AIzaSyCT3cx-DkKzqO3Enm8uGNyICBU-ewrpYrc'
      }
    ]
  ],
  css: [
    'element-ui/lib/theme-chalk/index.css', '@vuikit/theme', '~assets/styles/main.scss'
  ],
  sassResources: ['~assets/styles/abstracts/_variables.scss', '~assets/styles/abstracts/_mixin.scss', '~assets/styles/abstracts/_extensions.scss']
}
