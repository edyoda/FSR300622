// https://www.freecodecamp.org/news/node-js-streams-everything-you-need-to-know-c9141306be93/

var fs = require("fs");
var data = 'Simply Easy Learning';

const { Writable } = require('stream');

// We just create an object from the Writable constructor and pass it a number of options. The only required option is a write function which exposes the chunk of data to be written.


const writerStream = new Writable({
  /** This write method takes three arguments.
 - The chunk is usually a buffer unless we configure the stream differently.
 - The encoding argument is needed in that case, but usually we can ignore it.
 - The callback is a function that we need to call after we’re done processing the data chunk. It’s what signals whether the write was successful or not. To signal a failure, call the callback with an error object.
  */
  write(chunk, encoding, callback) {
    console.log(chunk.toString());
    callback();
  }
});

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8', ()=>console.log("from the callback()"));

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
   console.log("Write completed.");
});

writerStream.on('error', function(err) {
   console.log(err.stack);
});

console.log("Program Ended");