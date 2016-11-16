const Inert = require('inert');

const {server, start} = require('./server');

server.register(Inert, (err) => {

    if (err) {
        throw err;
    }

    server.route({
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.file('./assets/hello.html');
        }
    });

});

start();