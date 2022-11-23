let http = require('http')
let fs = require('fs')
let port = 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  })
  fs.readFile('./index.html', null, function (error, data) {
    if (error) {
      response.writeHead(404)
      respone.write('Whoops! File not found!')
    } else {
      //   console.log(data.toString())
      response.write(data)
    }
    response.end()
  })
})

server.listen(port, () => {
  console.log(`Server is listening on port number: ${port}`)
})
