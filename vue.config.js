/* eslint-disable @typescript-eslint/no-var-requires */
const TerserPlugin = require('terser-webpack-plugin')


module.exports = {
  transpileDependencies: [
    "vuetify"
  ],
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          parallel: 4,
          cache: true 
        })
      ]
    }
  }
}
