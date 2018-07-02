require('babel-core/register');

exports.config = {
    specs: ['./e2e-tests/tmp/index.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    baseUrl: 'http://127.0.0.1:8080/',
    framework: 'jasmine',
};