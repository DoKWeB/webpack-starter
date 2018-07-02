const autoprefixer = require('autoprefixer');

module.exports = (env) => ({
    loader: 'postcss-loader',
    options: {
        plugins: [
            autoprefixer({
                browsers: ['ie >= 8', 'last 4 version']
            })
        ],
        sourceMap: env === 'development'
    }
});