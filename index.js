const httpServer = require('./servers/http.server');

httpServer.listen(3000, () => {
    console.log('server is running on 3999');
});