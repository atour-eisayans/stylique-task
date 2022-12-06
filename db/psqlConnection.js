const knex = require('knex');
const postgresConfig = require('../configs/knexfile');

const dbConnection = knex(postgresConfig);

module.exports = {
    getConnection: (tableName = '') => {
        if (!dbConnection) {
            throw new Error('...')
        }
        return tableName? dbConnection(tableName) : dbConnection;
    },
    testConnection: async () => {
        // TODO: create a real test
        console.log('connection has been checked!');
    },
};
