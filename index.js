const {
    httpConfig,
} = require('./configs/config');
const httpServer = require('./servers/http.server');

httpServer.listen(httpConfig.port, () => {
    console.log('server is running on ' + httpConfig.port);
});