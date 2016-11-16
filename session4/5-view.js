const Path = require('path');
const Hapi = require('hapi');
const Vision = require('vision');

const {server, start} = require('./server');

server.register(Vision, (err) => {

    server.views({
        engines: {
            'html': {
                module: require('handlebars'),
                compileMode: 'sync' // engine specific
            }
        },
        relativeTo: __dirname,
        path: 'assets',
        compileMode: 'async' // global setting
    });

});

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index',{
            title:'Title!',
            body:'Helloooo'
        });
    }
});


start();