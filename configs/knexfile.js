const { postgresConfig } = require('./config');

module.exports = {
  client: 'pg',
    connection: {
      database: postgresConfig.dbName,
      user: postgresConfig.dbUser,
      password: postgresConfig.dbPassword,
    },
    pool: {
      min: postgresConfig.dbPoolMinSize,
      max: postgresConfig.dbPoolMaxSize,
    },
    migrations: {
      tableName: postgresConfig.dbMigrationTable,
    },
};
