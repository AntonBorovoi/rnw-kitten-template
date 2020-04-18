const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './index.web.js',
  output: {
    publicPath: '',
    path: path.join(__dirname, 'web/build'),
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules\/(?!()\/).*/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /@?(ui-kitten|eva-design).*\.(ts|js)x?$/,
        loader: 'babel-loader',
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: 'web/public/index.html',
      filename: 'index.html',
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
    extensions: ['.web.js', '.js'],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
};

module.exports = config;
