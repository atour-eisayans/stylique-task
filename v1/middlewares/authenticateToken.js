const { verify: verifyLoginToken } = require('../../helpers/loginTokenHandler');
const {
    AuthenticationError,
} = require('../../errors');

module.exports = {
    mustLoggedin: async (req, res, next) => {
        try {
            const token = req.get('auth-token') || null;
            if (!token) {
                throw new AuthenticationError();
            }
            const decoded = await verifyLoginToken(token);
            if (!decoded) {
                throw new AuthenticationError();
            }
            req.decodedUser = decoded;
            next();
        } catch (error) {
            next(error);
        }
    },
};
