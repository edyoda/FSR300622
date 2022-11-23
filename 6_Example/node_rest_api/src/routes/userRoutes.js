const express = require('express')
const router = express.Router()

const {
  getUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
} = require('../controllers/userController')

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.get('/users', (req, res) => {
  getUsers(req, res)
})

router.get('/users/:id', (req, res) => {
  getUser(req, res, req.params.id)
})

router.post('/users/', (req, res) => {
  createUser(req, res)
})

router.put('/users/:id', (req, res) => {
  updateUser(req, res, req.params.id)
})

router.delete('/users/:id', (req, res) => {
  deleteUser(req, res, req.params.id)
})

module.exports = router
