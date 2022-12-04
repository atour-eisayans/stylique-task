const CustomError = require('./Custom.error');

class AuthorizationError extends CustomError {
    constructor(data = {}) {
        super('You don\'t have required permissions!', 403, data);
    }
}

module.exports = AuthorizationError;
