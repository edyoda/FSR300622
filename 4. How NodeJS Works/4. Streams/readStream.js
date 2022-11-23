




// Readable Streams:

const { Readable } = require('stream');

// Reading the data
const inStream = new Readable({
	read() { }
});

// Pushing the data to the stream
inStream.push('Hello Once ');
inStream.push(
	'Hello Twice');

// Indicates that no more data is
// left in the stream
inStream.push(null);

// Echoing data to the standard output
inStream.pipe(process.stdout);




