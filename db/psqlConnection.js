const knex = require('knex');
const postgresConfig = require('../configs/knexfile');

const dbConnection = knex(postgresConfig);

module.exports = {
    getConnection: () => {
        if (!dbConnection) {
            throw new Error('...')
        }
        return dbConnection;
    },
    testConnection: async () => {
        // tiny technical debt
        console.log('connection has been checked!');
    },
};
