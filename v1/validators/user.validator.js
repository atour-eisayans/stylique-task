const { userRolesIds } = require('../../configs/enums');
const hashPassword = require('../../helpers/hashGenerator');
const {
    BadRequestError,
} = require('../../errors');

module.exports = {
    createUser: ({
        name = '',
        login = '',
        password = '',
        role = 0,
    }) => {
        const badFields = [];
        if (!name || name.length === 0) {
            badFields.push({
                name: 'must be a string with at least 1 character length!',
                value: name,
            });
        }

        if (!login || login.length === 0) {
            badFields.push({
                login: 'must be a string with at least 1 character length!',
                value: login,
            });
        }

        if (!password || (password.length && password.length < 6)) {
            badFields.push({
                password: 'must be at least 6 character!',
                currentLength: password.length || 0,
            });
        }

        if (!role || !userRolesIds[role]) {
            badFields.push({
                role: 'invalid role!',
                value: role,
            });
        }

        if (badFields.length > 0) {
            throw new BadRequestError({errors: badFields});
        }

        return {
            name,
            login,
            password: hashPassword(password),
            role
        };
    },
    loginUser: ({
        login = '',
        password = '',
    }) => {
        const badFields = [];
        if (!login || login.length === 0) {
            badFields.push({
                login: 'must not be empty!',
            });
        }

        if (!password || !password.length) {
            badFields.push({
                password: 'must not be empty!',
            });
        }

        if (badFields.length > 0) {
            throw new BadRequestError({errors: badFields});
        }

        return {
            login,
            password: hashPassword(password),
        };
    }
};
