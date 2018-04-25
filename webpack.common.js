const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/index.js',
    // another: './src/another-module.js'
    vendor: [
        'lodash'
    ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    // chunkFilename: '[name].bundle.js',
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack'
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.SplitChunksPlugin({
        cacheGroups: {
            default: {
                minChunks: 2,
                priority: -20,
                reuseExistingChunk: true,
            },
            //打包重复出现的代码
            vendor: {
                chunks: 'initial',// 必须三选一： "initial" | "all" | "async"(默认就是异步)
                minChunks: 2,
                maxInitialRequests: 5, // 最大初始化请求书，默认1
                minSize: 0, // This is example is too small to create commons chunks
                name: 'vendor'// 要缓存的 分隔出来的 chunk 名称
            },
            
        }
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};