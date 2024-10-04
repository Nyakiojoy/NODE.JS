// index.js
// const EventEmitter = require('events');
import EventEmitter from 'events';
// const LogEvents = require('./LogEvents');
import LogEvents from "./logEvents.js";

const eventEmitter = new EventEmitter();

eventEmitter.on('logEvent', async (message) => {
    await LogEvents(message);
});

setTimeout(() => {
    eventEmitter.emit('logEvent', 'New log event emitted');
}, 2000);


