const path = require('path');
var WebpackBuildNotifierPlugin = require('webpack-build-notifier');

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath:'/',
    filename:'js/app.min.js'
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "css/app.css",
        },
        use: [
          "sass-loader",
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults "}]
            ],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        },
      },
    ],
  },
  plugins:[
    new WebpackBuildNotifierPlugin({
        title: "Webpack build: ",
        sound: "Sosumi",
        suppressSuccess: false
    })
  ]
};