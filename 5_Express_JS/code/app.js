const express = require('express')
const birds = require('./router')
const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

// const myLogger0 = function (req, res, next) {
//   console.log('LOGGED 0.0')
//   next()
// }
// const myLogger1 = function (req, res, next) {
//   console.log('LOGGED 0.1')
//   next()
// }

// app.use(myLogger0)
// app.use(myLogger1)

// app.use('/', (req, res, next) => {
//   console.log('From HomePage 0 ')
//   next()
// })

// app.use('/', (req, res, next) => {
//   console.log('From HomePage 1')
//   next()
// })

// Data Source, could be replaced with a real database
const todos = [
  {
    title: 'Todo 1',
    desc: 'This is my first Todo',
    completed: true,
  },

  {
    id: 2,
    title: 'Todo 2',
    desc: 'This is my second Todo',
    completed: true,
  },

  {
    title: 'Todo 3',
    desc: 'This is my third Todo',
    completed: true,
  },

  {
    title: 'Todo 4',
    desc: 'This is my fourth Todo',
    completed: true,
  },

  {
    title: 'Todo 5',
    desc: 'This is my fifth Todo',
    completed: true,
  },
]
// Data source ends here

// Endpoint starts here
const middlewareFN1 = (req, res, next) => {
  console.log('Start 1')
  console.log('LOGGED 1')
  console.log('End 1')
  next()
  console.log('after next 1')
}
const middlewareFN2 = (req, res, next) => {
  console.log('Start 2')
  console.log('LOGGED 2')
  console.log('End 2')
  next()
  console.log('after next 2')
}

app.use('/birds', birds)

app.get('/', middlewareFN1, middlewareFN2, (request, response) => {
  console.log('END')
  response.send('This is a homepage')
})

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send(req.params)
})

app.get('/users/:userId/:classId', (req, res) => {
  res.send(req.params)
})

app.get('/flights/:from-:to', (req, res) => {
  res.send(req.params)
})

app.get('/homepage', (req, res) => {
  res.redirect('/')
})

app.get('/users', (req, res) => {
  res.send('All the Users!')
})

app.post('/users', (req, res) => {
  res.send('POST: All the Users!')
})

app
  .route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })

app.get('/todos', (request, response) => {
  response.status(200).json(todos)
})

app.get('/todos/:id', (request, response) => {
  response.status(200).json({ data: todos[+request.params.id - 1] })
})

app.post('/todos', (request, response) => {
  todos.push(request.body)
  response.status(201).json({ msg: 'Todo created successfully' })
})

app.put('/todos/:id', (request, response) => {
  const todo = todos.find((todo) => todo.id === +request.params.id)
  if (todo) {
    const { title, desc, completed } = request.body
    todo.title = title
    todo.desc = desc
    todo.completed = completed
    response.status(200).json({ msg: 'Todo updated sucessfully' })
    return
  }
  response.status(404).json({ msg: 'Todo not found' })
})

app.delete('/todos/:id', (request, response) => {
  const todoIndex = todos.findIndex((todo) => todo.id === +request.params.id)
  if (todoIndex) {
    todos.splice(todoIndex, 1)
    response.status(200).json({ msg: 'Todo deleted successfully' })
  }
  response.status(404).json({ msg: 'Todo not found' })
})
// Endpoints end here

// App listens to incoming requests here
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
