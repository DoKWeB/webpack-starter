module.exports = function () {
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: ['babel-loader']
                }
            ]
        }
    };
};