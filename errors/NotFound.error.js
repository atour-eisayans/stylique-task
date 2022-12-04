const CustomError = require('./Custom.error');

class NotFoundError extends CustomError {
    constructor(data = {}) {
        super('Not found!', 404, data);
    }
}

module.exports = NotFoundError;
