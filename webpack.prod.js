const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common');

let prodConfig = {
    mode: 'production', //开发阶段
    output: {
        filename: 'index.[hash].js', //生成文件的名字
        path: path.resolve(__dirname, './dist') //生成在dist目录下
    },
    module: {
        rules: [ //规则
            {
                test: /\.(c|sa|sc|le)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            sourceMap: true,
                            plugins: loader => [
                                require('autoprefixer')({ browsers: ['> 0.15% in CN'] }) // 添加前缀
                            ]
                        }
                    }, {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    }

                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name][hash].css', // 设置最终输出的文件名
            chunkFilename: '[id][hash].css'
        }),
    ],
    optimization: {
        minimizer: [
            new OptimizeCSSAssetsPlugin({}),//压缩css的插件
            new UglifyJsPlugin({//压缩js的插件
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
            })
        ]
    }
};

module.exports = merge(common,prodConfig);