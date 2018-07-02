const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCSS = require('./webpack/css.extract');
const uglifyJS = require('./webpack/js.uglify');
const images = require('./webpack/images');
const babel = require('./webpack/babel');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build'),
    github: path.join(__dirname, 'docs')
};

function getCommon(env) {
    let isGithub = env === 'github',
        pathKey = isGithub ? 'github' : 'build';

    return merge([
        {
            entry: {
                'index': PATHS.src + '/index.js'
            },
            output: {
                path: PATHS[pathKey],
                filename: 'js/[name].js'
            },
            plugins: [
                new HtmlWebpackPlugin({
                    filename: 'index.html',
                    chunks: ['index', 'common'],
                    template: PATHS.src + '/index.pug',
                    github: isGithub
                }),
                new webpack.optimize.CommonsChunkPlugin({
                    name: 'common'
                }),
                new webpack.DefinePlugin({
                    ENV: JSON.stringify(env)
                })
            ]
        },
        pug(),
        images(),
        babel()
    ]);
}

module.exports = function (env) {
    if (env === 'production' || env === 'github') {
        return merge([
            getCommon(env),
            extractCSS(env),
            uglifyJS(env)
        ]);
    }
    if (env === 'development') {
        return merge([
            getCommon(env),
            devserver(),
            sass(env),
            css(env),
            {
                devtool: 'source-map'
            }
        ]);
    }
};