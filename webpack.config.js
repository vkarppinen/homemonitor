const path = require('path');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Autoprefixer = require('autoprefixer');

const BUILD_PATH = path.join(__dirname, 'dist');
const SOURCE_PATH = path.join(__dirname, 'src');

const common = {
  entry: SOURCE_PATH,

  output: {
      path: BUILD_PATH,
      filename: 'bundle.js'
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: path.join(SOURCE_PATH, 'index.html'),
      filename: path.join(BUILD_PATH, 'index.html')
    })
  ],

  resolve: {
      extensions: ['.js', '.jsx']
  }
}

const production = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ Autoprefixer ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ]
}

const development = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [ Autoprefixer ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    })
  ]
}

switch(path.basename(process.argv[1])) {
  case 'webpack':
    module.exports = merge(common, production);
    break;

  case 'webpack-dev-server':
    module.exports = merge(common, development);
    break;

  default:
    new Error('What are you trying to do?')
    break;
}
