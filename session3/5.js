#!/bin/node

const EventEmitter = require('events').EventEmitter;

let myLogger = new EventEmitter();

//
// var listeners{
//     'debug':[...]
// };

//


myLogger.addListener('debug', d=> {
    console.log(`**${d.toLowerCase()}**`);
});

myLogger.addListener('debug', d=> {
    console.log(`[Debug] ${d.toLowerCase()}`);
});

myLogger.emit('debug','Test Debug')

