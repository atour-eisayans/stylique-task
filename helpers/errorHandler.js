const { CustomError, BadRequestError } = require('../errors');

// This error handler can catch many error types as required
// but for now, it's a tiny one!
module.exports = (error, { httpResponder = null, httpServer = null }) => {
    if (error instanceof CustomError) {
        httpResponder.status(error.statusCode).json(error);
    } else if (error.code === '23505') {
        // duplication error
        const msg = error.detail.split('=')[1];
        const badRequestError = new BadRequestError({
            error: msg,
        });
        httpResponder.status(badRequestError.statusCode).json(badRequestError);
    } else {
        console.log(error)
        if (httpResponder) {
            httpResponder.status(500).json({
                error: 'something went wrong!'
            });
        }
        if (httpServer) {
            httpServer.close();
        }
    }
};
