const events = require('events');
const { add } = require('./lib/calcFunc');
const myEventEmitter = new events.EventEmitter();

myEventEmitter.on('addEvent', add);
myEventEmitter.on('addEvent', (a, b) => {
    console.log(`sum ${a} and ${b} = `, add(a, b));
});
myEventEmitter.emit('addEvent', 5, 6);