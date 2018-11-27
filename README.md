## 本地安装webpack
    npm install --save-dev webpac
    # 如果你使用 webpack 4+ 版本，你还需要安装 CLI。
    npm install --save-dev webpack-cli

## npm init -y 初始化

## 项目结构
    + |- package.json
    + |- /dist
    +   |- index.html
    + |- /src
    +   |- index.js

## 安装 loadash 依赖
    npm install --save lodash

## src/index.js 文件
    import _ from 'lodash'; //引入lodash

## 编写 webpack 配置文件
     |- package.json
   + |- webpack.config.js
     |- /dist
        |- index.html
     |- /src
        |- index.js    

    # webpack.config.js 内容如下： 
        const path = require('path');

        module.exports = {
            mode: 'development',
            entry: './src/index.js',
            output: {
                filename: 'main.js',
                path: path.resolve(__dirname, './dist')
            }
        };

## npx webpack  直接执行构建任务：
    打开： dist/index.html 可以查看到页面的结果。

## 加载非js文件
    第一步： 安装 css 和 style 模块解析的依赖 style-loader 和 css-loader
        npm install --save-dev style-loader css-loader

    第二步： 添加 css 解析的 loader
        const path = require('path');

        module.exports = {
            entry: './src/index.js',
            output: {
                filename: 'bundle.js',
                path: path.resolve(__dirname, 'dist')
            },
            module: {
                rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
                ]
            }
        };