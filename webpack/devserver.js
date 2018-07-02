const config = require('../server/constants');
const port = config.port;
const apiPrefix = config.apiPrefix;
const targetApiAddress = 'http://localhost:' + port;

module.exports = function () {
    return {
        devServer: {
            stats: 'errors-only',
            port: 9000,
            // historyApiFallback: true, // for angular routing app
            hot: true,
            proxy: [
                {
                    path: apiPrefix.slice(0, -1),
                    target: targetApiAddress
                },
                {
                    path: apiPrefix,
                    target: targetApiAddress
                },
            ],
            // host: '192.168.1.64', // for network share
        }
    };
};