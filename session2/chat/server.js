const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer(function (req, res) {
    // parse URL
    var url_parts = url.parse(req.url);

    // console.log(url_parts);

    if (url_parts.pathname.indexOf('/poll') == 0) {
        handlePoll(req,res,url_parts);
        return;
    }

    if (url_parts.pathname.indexOf('/msg') == 0) {
        handleMsg(req, res, url_parts);
        return;
    }


    // Default route
    fs.readFileAsync('.' + url_parts.path, (err, data)=> res.end(data));

}).listen(5454, 'localhost');

console.log('Server running.');

const messages = ['Hello there!'];
const clients = [];

function handlePoll(req, res, url_parts) {
    var count = parseInt(url_parts.pathname.replace(/[^0-9]*/, ''));
    console.log(count);

    if (messages.length > count) {

        res.end(JSON.stringify({
            count: messages.length,
            append: messages.slice(count).join("\n") + "\n",
        }));

    } else {
        clients.push(res);
    }
}

function handleMsg(req, res, url_parts) {

    var msg = unescape(url_parts.pathname.substr(5));

    messages.push(msg);

    while (clients.length > 0) {
        var client = clients.pop();
        client.end(JSON.stringify({
            count: messages.length,
            append: msg + "\n"
        }));
    }

    res.end();
}