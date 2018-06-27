const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const uglifyJS = require('./webpack/js.uglify');
const babel = require('./webpack/babel');

const PATHS = {
    src: path.join(__dirname, 'e2e-tests'),
    build: path.join(__dirname, 'e2e-tests/tmp')
};

const common = merge([
    {
        entry: {
            'index': PATHS.src + '/index.js'
        },
        output: {
            path: PATHS.build,
            filename: 'index.spec.js'
        },
    },
    babel(),
    uglifyJS()
]);

module.exports = function () {
    return common;
};