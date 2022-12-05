const jwt = require('jsonwebtoken');
const { secrets } = require('../configs/config');

module.exports = {
    generate: (obj) => new Promise((resolve, reject) => {
        jwt.sign(
            obj,
            secrets.jwt,
            { expiresIn: '1h' },
            (error, key) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(key);
                }
            }
        )
    }),
    verify: (token) => new Promise((resolve, reject) => {
        jwt.verify(
            token,
            secrets.jwt,
            (error, decoded) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(decoded);
                }
            }
        );
    })
}
