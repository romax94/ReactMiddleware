const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const HtmlWebpackPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: 'index.html'
});

module.exports = {
  entry:  path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.js$/, /\.jsx$/],
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader']
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    HtmlWebpackPlugin
  ]
}