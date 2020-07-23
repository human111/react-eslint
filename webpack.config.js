const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/app.js'
  },
  output: {
    filename: '[name].bundle.js', // 定义输出文件名称
    path: path.resolve(__dirname, 'dist') // 定义输出目录
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/, // 匹配.css文件
        use: ['style-loader', 'css-loader', 'sass-loader'], // 加载方式从右往左
      },
      {
        test: /\.(js|jsx)$/, // 匹配.js文件
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    compress: true,
    useLocalIp: true,
    host: '0.0.0.0',
    port: 2223,
    open: true,
    overlay: { warnings: false, errors: true },
    // publicPath: config.dev.assetsPublicPath,
    // proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: false // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: path.resolve(__dirname, 'dist/index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}