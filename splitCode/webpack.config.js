const path = require('path');

module.exports = {
    entry: {
        pageA: './src/pageA.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: './dist/',
        filename: '[name].bundle.js'
    },
    mode: 'development'
};
