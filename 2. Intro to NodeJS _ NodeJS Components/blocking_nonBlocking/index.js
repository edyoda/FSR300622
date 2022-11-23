// https://nodejs.dev/en/learn/overview-of-blocking-vs-non-blocking/
// https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/

const fs = require('fs');

// Blocking
const data = fs.readFileSync('/file.text'); // blocks here until file is read



// Non-Blocking
fs.readFile('/file.txt', (err, data) => {
  if (err) throw err;
});