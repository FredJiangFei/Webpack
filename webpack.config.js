'use strict';

const path = require('path');

module.exports = {
    entry: {
        app: './app.js'
    },
    output: {
        path: path.resolve(__dirname),
        filename: 'bundle.js'
    }
};
