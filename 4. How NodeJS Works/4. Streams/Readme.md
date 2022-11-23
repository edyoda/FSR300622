 Using streams, large data sets are divided up into smaller chunks, which are then processed one at a time, one by one.

- This eliminates the need to read data from storage into memory before processing it. Many libraries used in Node.js support non-blocking execution, where chunks of data are streamed as they are received.