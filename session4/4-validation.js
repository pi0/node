const Joi = require('joi');

const {server, start} = require('./server');

server.route({
    method: 'GET',
    path: '/{name}',
    handler: function (request, reply) {
        //reply.find('');
        reply('Hello ' + request.params.name + '!');
    },
    config: {
        validate: {
            params: {
                name: Joi.string().min(3).max(10)
            }
        }
    }
});

start();