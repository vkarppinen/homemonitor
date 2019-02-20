const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const BUILD_PATH = path.join(__dirname, 'dist');
const SOURCE_PATH = path.join(__dirname, 'src');

module.exports = {
    entry: path.join(SOURCE_PATH, 'index.jsx'),
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },

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
                plugins: function() {
                  return [
                    require('autoprefixer')
                  ];
                }
              }
            },
            'sass-loader'
          ]
        }
      ]
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
