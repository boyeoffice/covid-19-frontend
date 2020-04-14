export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Covid-19 Estimator",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "A single page website for a covid-19 estimator, Author:Olakunle Boye, website:http://olakunleboye.com"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~/assets/main.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    //
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
