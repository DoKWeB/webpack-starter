const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const postcss = require('./postcss');

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        publicPath: '../',
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            postcss(env),
                            'sass-loader'
                        ]
                    })
                },
                {
                    test: /\.css$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            postcss(env)
                        ]
                    })
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('css/[name].css'),
            new OptimizeCssAssetsPlugin()
        ]
    };
};