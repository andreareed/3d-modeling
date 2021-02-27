const Glue = require('@hapi/glue');
const manifest = require('./manifest');
const config = require('./config');

const options = {
    relativeTo: __dirname + '/src',
};

const startServer = async function () {
    try {
        const server = await Glue.compose(manifest, options);
        await server.start();
        console.log('Server running at:', server.info.uri);
        console.log('Environment:', config.env);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

startServer();
