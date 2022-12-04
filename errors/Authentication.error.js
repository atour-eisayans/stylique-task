const CustomError = require('./Custom.error');

class AuthenticationError extends CustomError {
    constructor(data = {}) {
        super('Authentication Failed!', 401, data);
    }
}

module.exports = AuthenticationError;
