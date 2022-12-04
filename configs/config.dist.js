module.exports = {
    httpConfig: {
        port: '<number>',
    },
    postgresConfig: {
        dbName: 'database-name',
        dbUser: 'database-user',
        dbPassword: 'database-password',
        dbPort: 'database-port',
        dbMigrationTable: 'migrations-table-name',
        dbPoolMinSize: '<number>',
        dbPoolMaxSize: '<number>',
    },
    secrets: {
        hashSalt: 'some-secret-phrase',
    },
};
