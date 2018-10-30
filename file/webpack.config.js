const path = require('path');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: './dist/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader'
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
                    ]
                })
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].min.[ext]',
                            publicPath: 'imgs/',
                            useRelativePath: true
                        }
                    },
                    // {
                    //     loader: 'url-loader',
                    //     options: {
                    //         limit: 10000,
                    //         publicPath: 'imgs/',
                    //         useRelativePath: true
                    //     }
                    // },
                    {
                        loader: 'img-loader',
                        options: {
                            pngquant: {
                                quality: 80
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin({
            filename: '[name].min.css'
        })
    ]
};
