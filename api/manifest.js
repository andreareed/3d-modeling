const version = require('./package.json').version;

const server = {
    routes: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['api-version'],
        },
    },
    port: 9000,
};

const plugins = [
    {
        plugin: require('./bootstrap'),
    },
];

module.exports = {
    server,
    register: {
        plugins,
    },
};
