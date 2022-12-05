const CustomError = require('./Custom.error');
const AuthenticationError = require('./Authentication.error');
const AuthorizationError = require('./Authorization.error');
const BadRequestError = require('./BadRequest.error');
const NotFoundError = require('./NotFound.error');

module.exports = {
    CustomError,
    AuthenticationError,
    AuthorizationError,
    BadRequestError,
    NotFoundError,
};
