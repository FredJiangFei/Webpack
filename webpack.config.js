const path = require('path');

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};
