const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const METADATA = {
  title: 'Webpack Demo',
  baseUrl: '/',
  host: 'localhost',
  port: 3000
};

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
    metadata: METADATA,
    entry: [
      path.resolve(srcPath, 'assets', 'js', 'app.js')
    ],
    output: {
        path: path.resolve(distPath, 'assets'),
        publicPath: '/assets/',
        filename: 'js/bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath], query: { presets: ['es2015'] }},
          { test: /\.css$/, loader: 'style!css!postcss' },
          { test: /\.scss$/, loader: ExtractTextPlugin.extract('style', 'css!postcss!sass') }
        ]
    },
    plugins: [
        new ExtractTextPlugin('css/bundle.css'),
        new HtmlWebpackPlugin({
          template: path.resolve(srcPath, 'index.html'),
          filename: path.resolve(distPath, 'index.html')
        })
    ],
    resolve: {
        extensions: ['', '.js', '.scss'],
        root: [srcPath]
    },
    postcss: function () {
        return [autoprefixer];
    },
    devServer: {
      port: METADATA.port,
      host: METADATA.host,
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      contentBase: distPath
    }
};
