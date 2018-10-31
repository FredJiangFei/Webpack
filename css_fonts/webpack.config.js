const path = require('path');
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
    module: {
        rules: [
            {
                test: /\.less$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                        loader: 'style-loader',
                        options: {
                            singleton: true
                        }
                    },
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                                localIdentName: '[local]'
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: [
                                    require('postcss-sprites')({
                                        spritePath: 'dist/imgs',
                                        retina: true
                                    }),      
                                    require('postcss-cssnext')()
                                ]
                            }
                        },
                        {
                            loader: 'less-loader'
                        },

                    ]
                })
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
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 9001,
        historyApiFallback: {
            rewrites: [
                {
                    from: /^\/([a-zA-Z0-9]+\/?)([a-zA-Z0-9]+)/,
                    to: function (context) {
                        return '/' + context.match[1] + context.match[2] + '.html'
                    }
                }
            ]
        }
        // inline: false
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name]-bundle-[hash:5].css',
            allChunks: false // 只提取初始化css，异步加载的不会提取
        }),
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: './index.html',
            // chunks: ['app'], // 要提取的entry名称
            minify: {
                collapseWhitespace: true
            }
            // inject: false
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};
