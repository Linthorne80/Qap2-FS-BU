// define/extend an EventEmitter class
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {};

// initialize an new emitter object
const myEmitter = new MyEmitter();
// bind the 'example' event and set the function when event is emitted (fired)
// .on() and .addListener() are the same
myEmitter.addListener('example', () => console.log(`my first 'example' bound emitter function`));
myEmitter.on('example', () => console.log(`my second 'example' bound emitter function`));
myEmitter.on('example', () => console.log(`my third 'example' bound emitter function`));

// bind the 'sample' event and set the function when event is emitted (fired)
myEmitter.on('sample', () => console.log(`my first 'sample' bound emitter function`));
myEmitter.on('sample', () => console.log(`my second 'sample' bound emitter function`));

myEmitter.addListener('bilbo', () => console.log(`my first 'bilbo' listener`));
myEmitter.on('bilbo', () => console.log(`my second 'bilbo' listener`));
myEmitter.on('bilbo', () => console.log(`my third 'bilbo' listener`));
myEmitter.on('bilbo', () => console.log(`my fourth 'bilbo' listener`));
myEmitter.on('bilbo', () => console.log(`my fifth 'bilbo' listener`));

// count how many listeners have been bound
console.log(`EXAMPLE: The 'example' event count: ` + myEmitter.listenerCount('example'));
console.log(`SAMPLE: The 'sample' event count: ` + myEmitter.listenerCount('sample'));
console.log(`BILBO: The 'bilbo' event count: ` + myEmitter.listenerCount('bilbo'));
// what events have been bound
console.log(`Event names: ` + myEmitter.eventNames());

// fire the 'example' event
console.log(`\nEMIT (fire) the 'example' event`);
const firstExample = () => { myEmitter.emit('example') };
firstExample();

// fire the 'sample' event
console.log(`\nEMIT (fire) the 'sample' event`);
const firstSample = () => { myEmitter.emit('sample') };
firstSample();

// fire the 'bilbo' event
console.log(`\nEMIT (fire) the 'bilbo' event`); 
const firstBilbo = () => { myEmitter.emit('bilbo') }; 
firstBilbo();