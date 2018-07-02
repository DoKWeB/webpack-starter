const webpack = require('webpack');

module.exports = function (env) {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: env === 'development',
                compress: {
                    warnings: false
                }
            })
        ]
    }
};