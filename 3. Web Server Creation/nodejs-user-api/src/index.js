require('dotenv').config()
const http = require('http')
const PORT = process.env.PORT || 5000
const {
  getUsers,
  getUser,
  createUser,
} = require('./controllers/userController')
const server = http.createServer((req, res) => {
  const { url, method } = req

  //====> It's important to set the status and headers before you start writing chunks of data to the body. This makes sense, since headers come before the body in HTTP responses.

  /***
   * ==> Response 'Content-Type':
   * '.html'              // => 'text/html'
   * 'html'               // => 'text/html'
   * 'json'               // => 'application/json'
   * 'application/json'   // => 'application/json'
   * 'png'                // => image/png:
   *
   * ==> Status Code:
   * res.statusCode = 200; // => 'OK'
   * res.statusCode = 403; // => 'Forbidden'
   * res.statusCode = 404; // => 'Not Found'
   * res.statusCode = 500; // => 'Internal Server Error'
   */

  if (url === '/' && method === 'GET') {
    res.writeHead(200, {
      'Content-Type': '.html',
    })
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>Hello, World!</h1>')
    res.write('</body>')
    res.write('</html>')
    res.end()
  } else if (url === '/api/users' && method === 'GET') {
    getUsers(req, res)
  } else if (url.match(/\api\/users\/([0-9]+)/) && method === 'GET') {
    console.log(url)
    const id = url.split('/')[3]
    getUser(req, res, id)
  } else if (url === '/api/users' && method === 'POST') {
    createUser(req, res)
  } else {
    res.writeHead(400, {
      'Content-Type': 'json',
    })
    res.end()
  }
})

server.listen(PORT, () => console.log('Running on http://localhost:5000'))
