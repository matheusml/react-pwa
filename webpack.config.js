const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });

const buildDirectory = path.join(__dirname, './build');

module.exports = {
  entry: './src/index.js',
  devServer: {
    historyApiFallback: true,
  },
  output: {
    path: buildDirectory,
    publicPath: '/',
    filename: '[name]-[hash:8].js',
    chunkFilename: '[name]-[chunkhash:8].js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
      },
      {
        test: /.(png|woff(2)?|eot|otf|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [HTMLWebpackPluginConfig],
};
