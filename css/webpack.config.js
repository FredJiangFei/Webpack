const path = require('path');

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
                use: [
                    {
                        loader: 'style-loader',
                        options: {
                            singleton: true
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            minimize: true
                        }
                    }
                ]
            }
        ]
    }
};
