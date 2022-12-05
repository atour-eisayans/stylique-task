const { userRolesIds } = require('../../configs/enums');
const {
    AuthorizationError,
    AuthenticationError,
} = require('../../errors');

module.exports = (roles) => (req, res, next) => {
    const user = req.decodedUser;
    if (!user) {
        return next(new AuthenticationError());
    }
    const { role } = user;
    const isAllowedRole = !!userRolesIds[role];
    if (!isAllowedRole) {
        return next(new AuthorizationError());
    }
    const isAuthorized = Array.isArray(roles) ?
        roles.indexOf(role) >= 0 : roles === role;
    if (!isAuthorized) {
        return next(new AuthorizationError());
    }
    next();
};
