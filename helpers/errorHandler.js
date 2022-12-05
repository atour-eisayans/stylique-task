const {
    CustomError,
    BadRequestError,
} = require('../errors');

module.exports = (error, { httpResponder = null }) => {
    if (error instanceof CustomError) {
        console.log('catched custom error ->', error);
        httpResponder.status(error.statusCode).json(error);
    } else if (error.code === '23505') {
        // duplication error
        const msg = error.detail.split('=')[1];
        const badRequestError = new BadRequestError({
            error: msg,
        });
        httpResponder.status(badRequestError.statusCode).json(badRequestError);
    } else {
        console.log(error);
    }
}