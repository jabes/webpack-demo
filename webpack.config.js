const path = require('path');
const webpack = require('webpack');

const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const srcPath = path.resolve(__dirname, 'src');
const distPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: [
    path.resolve(srcPath, 'main.js')
  ],
  output: {
    path: path.resolve(distPath),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.js$/, loader: 'babel', exclude: [nodeModulesPath, distPath]},
      {test: /\.css$/, loader: 'style!css!postcss'},
      {test: /\.scss$/, loader: 'style!css!postcss!sass'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.scss'],
    root: [srcPath]
  },
  babel: {
    presets: ['es2015'],
    plugins: ['transform-runtime']
  },
  postcss: function () {
    return [
      require('autoprefixer')
    ];
  },
  devServer: {
    host: 'localhost',
    port: 3000,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    contentBase: __dirname
  }
};
