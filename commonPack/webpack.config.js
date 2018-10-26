const path = require('path');

module.exports = {
    entry: {
        pageA: './src/pageA.js',
        pageB: './src/pageB.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    }
};
