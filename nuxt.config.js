export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "myBallrv2",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Get the most recent NBA stats on your favorite teams and players frequently. Works online and offline"
      },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/aos", mode: "client" },
    { src: "@/plugins/coverflow", mode: "client" }
  ],

  purgeCSS: {
    whitelist: [
      "aos-init",
      "aos-animate",
      "data-aos-delay",
      "data-aos-duration",
      "fade-up",
      "zoom-in"
    ]
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "nuxt-vite",
    "@nuxtjs/google-fonts",
    "nuxt-animejs"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/proxy",
    "@nuxtjs/strapi"
  ],
  googleFonts: {
    families: {
      Poppins: true,
      "Open Sans": true,
      "Nova Mono": true
    },
    prefetch: true,
    preload: true,
    display: "swap"
  },
  loadingIndicator: {
    name: "folding-cube",
    color: "#EB5A77",
    background: "#1d4ed8",
    continuous: true
  },

  pageTransition: {
    name: "page",
    mode: "out-in",
    css: false,

    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0
      });
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 300,
        easing: "easeInOutSine",
        complete: done
      });
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 300,
        easing: "easeInOutSine",
        complete: done
      });
    }
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    proxy: true
  },
  proxy: {
    "/api": {
      target: "https://api-nba-v1.p.rapidapi.com",
      pathRewrite: { "^/api": "" }
    },
    "/api2": {
      target: "https://balldontlie.io/api/v1",
      pathRewrite: { "^/api2": "" }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: "en"
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
};
