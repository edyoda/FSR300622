const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


// eventEmitter.on('start', () => {
//   console.log('started');
// });

// eventEmitter.emit("start")


eventEmitter.on('start', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('start', 1, 100);


eventEmitter.on('end', (start, end) => {
  console.log(`started from ${start} to ${end}`);
});

eventEmitter.emit('end', 1, 100);