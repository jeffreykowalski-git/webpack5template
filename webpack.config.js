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
    ],
  },
  plugins:[
    new WebpackBuildNotifierPlugin({
        title: "Webpack successfully built",
        sound: "Sosumi",
        suppressSuccess: false
    })
  ]
};