// https://www.freecodecamp.org/news/node-js-what-when-where-why-how-ab8424886e2
// https://www.freecodecamp.org/news/npm-cheat-sheet-most-common-commands-and-nvm/
// https://devhints.io/npm

// console.log(__dirname)
// console.log(__filename)
// console.log(process)

// const fs = require('node:fs/promises')

// Async Await
const fs = require('fs')

// const appendFileAsync = async (path, data) => {
//   try {
//     await fs.appendFile(path, data);
//     console.log("Done. Check test.txt")
//   } catch (error) {
//     console.error(error);
//   }
// };
// appendFileAsync("./test.txt", "appending from appendFileAsync() \n");


// Promises
// const appendFilePromises = (path, data) => {
//   fs.appendFile(path, data).then((error, data) => {
//     console.log("Done. Check test.txt")
//   }).catch(error =>
//     console.error(error)
//   )
// }
// appendFilePromises("./test.txt", "appending from appendFilePromises() \n");


fs.writeFileSync('../myfile.txt', "something meaningless")