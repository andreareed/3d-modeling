const config = require('./config');

const bootstrap = {
    name: '3D Modeling API',
    version: '0.1.0',
    register: async (server, options) => {
        // Add health check route
        server.route({
            method: 'GET',
            path: '/health-check',
            config: {
                handler: () => ':)',
            },
        });

        // rewrite requests from /api/* to /*
        server.ext({
            type: 'onRequest',
            method: function (request, h) {
                // allow for the /api prefix
                request.setUrl(request.url.pathname.replace(/\/api\//, '/'));
                return h.continue;
            },
        });
    },
};

module.exports = bootstrap;
