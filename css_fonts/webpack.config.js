const path = require('path');
const webpack = require('webpack');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name]-bundle-[hash:5].js'
    },
    devtool: 'source-map',
    devServer: {
        port: 9001,
        overlay: true,
        hot: true,
        hotOnly: true,
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                    to: function (context) {
                        return '/' + context.match[1] + context.match[2] + '.html'
                    }
                }
            ]
        },
        proxy: {
            '/': {
                target: 'https://api.github.com',
                changeOrigin: true,
                logLevel: 'debug',
                // pathRewrite: {
                //     '^/users': '/api/users'
                // }
                // headers: {

                // }
            }
        },
        open: true
        // inline: false
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            // singleton: true,
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[local]',
                            sourceMap: true
                        }
                    },
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         ident: 'postcss',
                    //         plugins: [
                    //             require('postcss-sprites')({
                    //                 spritePath: 'dist/imgs',
                    //                 retina: true
                    //             }),      
                    //             require('postcss-cssnext')()
                    //         ]
                    //     }
                    // },
                    {
                        loader: 'less-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                ]
                // use: ExtractTextWebpackPlugin.extract({
                //     fallback: {
                //         loader: 'style-loader',
                //         options: {
                //             singleton: true
                //         }
                //     },

                // })
            },
            {
                test: /\.(eot|woff2?|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash:5].[ext]',
                            limit: 5000,
                            publicPath: 'fonts/',
                            useRelativePath: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'imgs/'
                        }
                    }
                ]
            },
            // {
            //     test: /\.html$/,
            //     use: [
            //         {
            //             loader: 'html-loader',
            //             options: {
            //                 attrs: ['img:src']
            //             }
            //         }
            //     ]
            // }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name]-bundle-[hash:5].css',
            allChunks: false // 只提取初始化css，异步加载的不会提取
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            // chunks: ['app'], // 要提取的entry名称
            minify: {
                collapseWhitespace: true
            }
            // inject: false
        }),
        new CleanWebpackPlugin(['dist']),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ]
};
