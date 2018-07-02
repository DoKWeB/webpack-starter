const postcss = require('./postcss');

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        postcss(env),
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};