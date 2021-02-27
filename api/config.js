const merge = require('./src/utils/merge.js');
const env = process.env.APP_ENV || 'development';

const defaults = {
    env,
    db: {
        connection: {
            host: process.env.POSTGRES_HOST,
            user: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            port: process.env.POSTGRES_PORT,
        },
        seedDirectory: './seeds/dev',
    },
};

const environments = {
    development: {
        apiUrl: 'http://localhost:9000/api/',
    },
    production: {},
    test: {
        db: {
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: `${process.env.POSTGRES_DB}_test`,
                port: process.env.POSTGRES_PORT,
            },
        },
    },
};

module.exports = merge(defaults, environments[env]);
