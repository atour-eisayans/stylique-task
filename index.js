const { httpConfig } = require("./configs/config");
const { testConnection: testPGConnection } = require("./db/psqlConnection");
const httpServer = require("./servers/http.server");
const globalErrorHandler = require("./helpers/errorHandler");

async function start() {
    await testPGConnection();
    httpServer.listen(httpConfig.port, () => {
        console.log(`server is running on ${httpConfig.port}`);
    });
}

process.on("uncaughtException", (error) => {
    globalErrorHandler(error, {
        httpServer,
    });
});

process.on("unhandledRejection", () => {
    globalErrorHandler(error, {
        httpServer,
    });
});

start();
