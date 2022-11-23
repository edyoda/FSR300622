// https://www.w3schools.com/nodejs/nodejs_filesystem.asp
// https://nodejs.dev/en/learn/nodejs-file-stats/

/** Reading Files ***********************************************/

// Sync
const fs = require('fs')

try {
  const data = fs.readFileSync('file.txt', 'utf8')
  console.log(data)
} catch (err) {
  console.error(err)
}

console.log("Hello!")

// Async
const fs = require('fs')

fs.readFile('file.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

console.log("Hello!")

/** Writing to Files ***********************************************/

// Sync
const fs = require('fs')

let content = "This is what will be written to the file"

try {
  fs.writeFileSync('test_w_sync.txt', content)
  console.log("File written!")
} catch (err) {
  console.error(err)
}

fs.readFile('test_w_sync.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})

//Async
const fs = require('fs')

let content = "This is what will be written to the file"

fs.writeFile('test_w_async.txt', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("File written!")
})

fs.readFile('test_w_async.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(data)
})


/*** Appending content to a file *****************************/

// Callbacks
const fs = require('fs');
const content = 'Some content!';
fs.appendFile('file.txt', content, err => {
  if (err) {
    console.error(err);
  }
  // done!
});

// Async Await
const fs = require('node:fs/promises')

const appendFile = async (path, data) => {
  try {
    await fs.appendFile(path, data);
  } catch (error) {
    console.error(error);
  }
};
appendFile("./test.txt", "appending another hello world");


/**** File Stats ********************************************/

const fs = require('fs')

fs.stat('file.txt', (err, stats) => {
  if (err) {
    console.error(err)
    return
  }
  console.log(stats)
})



/***** Delete a file ******************************************/
var fs = require('fs');

fs.unlink('test.log', function(err) {
  if (err) throw err;
  console.log('File deleted!');
});

/***** Rename a file ************************************************************/

var fs = require('fs');

fs.rename('file.t', 'myfile.txt', function(err) {
  if (err) throw err;
  console.log('File Renamed!');
});
















