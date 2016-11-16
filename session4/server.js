const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({port: 3000});

function start() {
    server.start((err) => {

        if (err) {
            throw err;
        }

        console.log(`Server running at: ${server.info.uri}`);
    });
}


module.exports = {server,start};