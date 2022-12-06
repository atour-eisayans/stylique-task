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
        jwt: 'some-secret-phrase',
    },
    uploads: {
        destination: '/path/to/uploads',
        allowedImageFormats: ['array of extensions like .jpg, .png'],
        imagesMaxSize: '<number>-in bytes',
    },
};
