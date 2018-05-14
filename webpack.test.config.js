const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const images = require('./webpack/images');
const babel = require('./webpack/babel');

const PATHS = {
	src: path.join(__dirname, 'src'),
};

const common = merge([
	{
		cache: true,
		devtool: 'inline-source-map',
		module: {
			rules: [
				{
					test: /\.js?$/,
					include: PATHS.src,
					use: ['istanbul-instrumenter-loader'],
					enforce: 'post',
				},
			],
		}
	},
	images(),
	babel(),
	sass(),
	css(),
]);

module.exports = common;