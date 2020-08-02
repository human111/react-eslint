const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin')
const typescriptFormatter = require('react-dev-utils/typescriptFormatter')
const eslintFormatter = require('react-dev-utils/eslintFormatter')

process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const realPath = fs.realpathSync(process.cwd())
const resolvePath = relativePath => path.resolve(realPath, relativePath)

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    app: './src/main.tsx'
  },
  output: {
    filename: '[name].bundle.js', // 定义输出文件名称
    path: path.resolve(__dirname, 'dist') // 定义输出目录
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', 'txs'],
    alias: {
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      // First, run the linter. It's important to do this before Babel processes the JS.
      {
        test: /\.(js|ts|tsx|jsx)$/,
        enforce: 'pre',
        use: [
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint')
            },
            loader: require.resolve('eslint-loader')
          }
        ],
        include: resolvePath('src')
      },
      {
        oneOf: [
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 8000,
              name: 'static/img/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/media/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'static/fonts/[name].[hash:8].[ext]'
            }
          },
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: resolvePath('src'),
            loader: require.resolve('babel-loader'),
            options: {
              customize: require.resolve(
                'babel-preset-react-app/webpack-overrides'
              ),
              
              plugins: [
                [
                  require.resolve('babel-plugin-named-asset-import'),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent: '@svgr/webpack?-prettier,-svgo![path]',
                      },
                    },
                  },
                ],
                ['import', { libraryName: 'antd', style: true }],  // import less
              ],
              cacheDirectory: true,
              // Don't waste time on Gzipping the cache
              cacheCompression: false,
            },
          },
          {
            test: /\.(js|mjs)$/,
            exclude: /@babel(?:\/|\\{1,2})runtime/,
            loader: require.resolve('babel-loader'),
            options: {
              babelrc: false,
              configFile: false,
              compact: false,
              presets: [
                [
                  require.resolve('babel-preset-react-app/dependencies'),
                  { helpers: true },
                ],
              ],
              cacheDirectory: true,
              cacheCompression: false,
              sourceMaps: false,
            },
          },
          // css loader
          // {
          //   test: cssRegex,
          //   use: getStyleLoaders({
          //     importLoaders: 1,
          //   }),
          // },
          // {
          //   test: sassRegex,
          //   use: getStyleLoaders({ importLoaders: 2 }, 'sass-loader'),
          // },
          // {
          //   test: lessRegex,
          //   use: getStyleLoaders({ importLoaders: 2 }, 'less-loader'),
          // },
          // file-loader
          {
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
        ]
      },
      {
        test: /\.css$/, // 匹配.css文件
        use: ['style-loader', 'css-loader', 'sass-loader'], // 加载方式从右往左
      },
      // {
      //   test: /\.(js|jsx)$/, // 匹配.js文件
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader'
      //   }
      // }
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