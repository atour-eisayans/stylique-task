const {
    httpConfig,
} = require('./configs/config');
const { testConnection: testPGConnection } = require('./db/psqlConnection');
const httpServer = require('./servers/http.server');

async function start() {
    await testPGConnection();
    httpServer.listen(httpConfig.port, () => {
        console.log(`server is running on ${httpConfig.port}`);
    });
}

start();
