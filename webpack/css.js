const postcss = require('./postcss');

module.exports = function (env) {
    return {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        postcss(env)
                    ]
                }
            ]
        }
    };
};