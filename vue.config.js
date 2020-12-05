const path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(args => {
        // stupid workaround to prevent vue loader from stripping &nbsp;
        args.compilerOptions.whitespace = 'preserve'
      })
  },
  configureWebpack: {
    plugins: []
  }
}


if (process.env.NODE_ENV == 'production') {
  module.exports.configureWebpack.plugins.push(new PrerenderSPAPlugin({
    // Required - The path to the webpack-outputted app to prerender.
    staticDir: path.join(__dirname, 'dist'),
    // Required - Routes to render.
    routes: ['/', '/work-history'],
    postProcess(renderedRoute) {
      renderedRoute.html = renderedRoute.html.replace(/v_cloak/g, "v-cloak")
      renderedRoute.html = renderedRoute.html.replace(/jared\@kravse\.dev/g, `Jared AT kravse DOT dev`)
      return renderedRoute
    },
  }))
}