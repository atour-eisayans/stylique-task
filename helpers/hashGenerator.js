const crypto = require('crypto');
const { secrets } = require('../configs/config');

module.exports = (str) => crypto
    .pbkdf2Sync(
        str,
        secrets.hashSalt,
        500,
        32,
        'sha512'
    ).toString('hex');
