const fs = require('fs')
const getUserData = (req) => {
  return new Promise((resolve, reject) => {
    try {
      let body = ''

      req.on('data', (chunk) => {
        body += chunk.toString()
      })

      req.on('end', () => {
        resolve(body)
      })
    } catch (error) {
      reject(error)
    }
  })
}

const writeDataToFile = (filename, content) => {
  console.log('===>content', content)
  fs.writeFileSync(filename, JSON.stringify(content), 'utf-8', (error) => {
    if (error) {
      console.log(error)
    }
  })
}

module.exports = {
  getUserData,
  writeDataToFile,
}
