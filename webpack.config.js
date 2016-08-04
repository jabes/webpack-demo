const path = require("path");
const autoprefixer = require('autoprefixer');
const precss = require('precss');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: "assets/js/app.js",
    output: {
        path: path.join(__dirname, "dist"),
        filename: 'assets/js/[name].js'
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel', query: { presets: ['es2015'] }},
          { test: /\.css$/, loader: "style!css!postcss" },
          { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!postcss!sass") }
        ]
    },
    plugins: [
        new ExtractTextPlugin('assets/css/[name].css'),
        new HtmlWebpackPlugin(),
        new LiveReloadPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.scss'],
        root: [path.join(__dirname, 'src')]
    },
    postcss: function () {
        return [precss, autoprefixer];
    }
};
