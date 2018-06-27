const express = require('express');
const app = express();
const config = require('./constants');
const port = config.port;
const apiPrefix = config.apiPrefix;

app.get(apiPrefix, (request, response) => {
    response.json({
        appName: 'Test Application'
    });
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err);
    }
    console.log(`
server is listening on ${port}
Full address is http://localhost:${port}/
Api address is http://localhost:${port + apiPrefix}`
    );
});