const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js', //入口文件
    module: {
        rules: [ //规则
            {
                test: /\.js$/,
                exclude: /(node_modules)/,  // 加快编译速度，不包含node_modules文件夹内容
                use: {
                  loader: 'babel-loader',
                  options:{
                      cacheDirectory:true
                  }
                }
            },{
                test: /\.(png|svg|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader:'url-loader',
                        options:{
                            limit:10000,
                        }
                    },
                    {//优化图片配置
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ]
            }, 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App', // 默认值：Webpack App
            filename: 'index.html', // 默认值： 'index.html'
            template: path.resolve(__dirname, 'src/index.html'),
            minify: {
                collapseWhitespace: true,
                removeComments: true,//是否移除注释
                removeAttributeQuotes: true // 移除属性的引号
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ],
};