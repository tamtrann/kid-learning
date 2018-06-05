module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: "vue-stater",
    meta: [
      {
        charset: "utf-8"
      }, {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, {
        hid: "description",
        name: "description",
        content: "Nuxt.js project"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      }, {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
      }
    ]
  },
  plugins: [
    {
      src: "~plugins/element-ui"
    }, {
      src: "~plugins/vee-validate"
    }, {
      src: "~plugins/vue-lazyload"
    }, {
      src: "~plugins/vue-select",
      ssr: false
    }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: "#3b8070"
  },
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      "axios", "element-ui", "vee-validate", "vue-lazyload", "vue-select"
    ],
    /*
    ** Run ESLint on save
    */
    extend(config, {isDev, isClient}) {
      if (isDev && isClient) {
        config
          .module
          .rules
          .push({enforce: "pre", test: /\.(js|vue)$/, loader: "eslint-loader", exclude: /(node_modules)/})
      }
    }
  },
  modules: [
    [
      "nuxt-sass-resources-loader",
      ["~assets/styles/abstracts/_variables.scss", "~assets/styles/abstracts/_mixin.scss"]
    ]
  ],
  css: ["~assets/styles/main.scss", "element-ui/lib/theme-chalk/index.css"]
}
