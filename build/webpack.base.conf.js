var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')
var projectRoot = path.resolve(__dirname, '../')
var webpack = require('webpack')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: {
    app: './src/main.ts'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.ts', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      '@': resolve('src'),
      // adding our externals libs
      'semantic': path.resolve(__dirname, '../node_modules/semantic-ui-css/semantic.min.js')
      // 'moment': path.resolve(__dirname, '../node_modules/moment/min/moment-with-locales.js'),
      // 'numeral': path.resolve(__dirname, '../node_modules/numeral/min/numeral.min.js'),
      // 'gridster': path.resolve(__dirname, '../node_modules/gridster/dist/jquery.gridster.min.js'),
      // 'stapes': path.resolve(__dirname, '../node_modules/stapes/stapes.min.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        include: projectRoot,
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.ts$/,
        loader: 'tslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: { /* Loader options go here */ }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }, 
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery',
      semantic: 'semantic-ui-css',
      Semantic: 'semantic-ui-css',
      'semantic-ui': 'semantic-ui-css'
    })
  ]
}
