var http = require('http');

var content = '<h1>Works :)</h1>';

function ttt() {
    console.log('new request');
    // ...
}

function handle(request, response) {
    return ttt();
}

var server = http.createServer(handle);
server.listen(6050, 'localhost');

console.log('Server running at http://localhost:8080/.');