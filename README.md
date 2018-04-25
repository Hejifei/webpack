# webpack


# npm init 生成package.json文件
# npm install webpack --save-dev为项目添加webpack依赖

#加载css load
npm install --save-dev style-loader css-loader

#加载图片
npm install --save-dev file-loader

#加载数据
npm install --save-dev csv-loader xml-loader

#设定 HtmlWebpackPlugin
HtmlWebpackPlugin 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。
npm install --save-dev html-webpack-plugin

#清理/dist文件夹
npm install clean-webpack-plugin --save-dev

#Webpack Manifest Plugin 生成manifest.json，追踪文件的生成。
npm install --save-dev webpack-manifest-plugin

#使用 source map ，追踪错误跟警告。将编译后的代码映射回原始源代码
开发环境webpack.config.js 添加 devtool: 'inline-source-map',
生产环境webpack.config.js 添加 devtool: 'source-map',

#开发工具 自动编译代码
1、使用观察模式：如果其中一个文件被更新，代码将被重新编译，所以你不必手动运行整个构建。
我们添加一个用于启动 webpack 的观察模式的 npm script 脚本：
缺点：需要刷新浏览器才能看到修改后的实际效果。
在package.json中的scripts中添加：
"watch": "webpack --watch",
npm run watch

2、webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)
npm install --save-dev webpack-dev-server
在webpack.config.js中配置告知webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
webpack.config.js添加
devServer: {
    contentBase: './dist'
},
npm run start

3、webpack-dev-middleware
npm install --save-dev express webpack-dev-middleware
webpack.config.js添加
output:{
    publicPath: '/'
}
npm run server


#模块热替换
模块热替换(Hot Module Replacement 或 HMR)是 webpack 提供的最有用的功能之一
允许在运行时更新各种模块，无需刷新。

#Tree Shaking 描述移除js上下文中的未引用代码。
#将文件标记为无副作用(side-effect-free)
#压缩输出
我们将使用 -p(production) 这个 webpack 编译标记，来启用 uglifyjs 压缩插件。

#生产环节构建
npm install --save-dev webpack-merge

#代码分离
1、入口起点：使用entry配置手动地分离代码。
2、防止重复：使用CommonsChunkPlugin去重和分离chunk
3、动态导入：通过模块的内联函数调用来分离函数

#缓存
1、输出文件的文件名(Output Filenames)
output: {
    filename: '[name].[chunkhash].js'
}
2、提取模板(Extracting Boilerplate)


#打包js library




