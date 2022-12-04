const CustomError = require('./Custom.error');

class BadRequestError extends CustomError {
    constructor(data = {}) {
        super('Bad request!', 400, data);
    }
}

module.exports = BadRequestError;
