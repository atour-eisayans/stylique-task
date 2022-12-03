const { CustomError } = require('../errors');

module.exports = (error, { httpResponder = null }) => {
    if (error instanceof CustomError) {
        console.log('catched custom error ->', error);
        httpResponder.status(error.statusCode).json(error);
    }
}