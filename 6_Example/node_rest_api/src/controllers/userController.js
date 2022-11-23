const User = require('../models/userModel')
const { getUserData } = require('../utils/index')

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.status(200)
    res.json(users)
  } catch (error) {
    res.status(500)
    res.send('Something Went Wrong')
    console.log(error)
  }
}

const getUser = async (req, res, id) => {
  try {
    const user = await User.find(id)
    if (!user) {
      res.status(404)
      res.json({ message: 'User Not Found' })
    } else {
      res.status(200)
      res.json(user)
    }
  } catch (error) {
    res.status(500)
    res.send('Something Went Wrong')
    console.log(error)
  }
}

const createUser = async (req, res) => {
  try {
    const body = req.body
    console.log(body)
    const { firstName, lastName, maidenName, age, gender, email } = body
    let user = {}
    if (firstName && lastName && email) {
      user = {
        id: 2000,
        firstName,
        lastName,
        maidenName,
        age,
        gender,
        email,
      }
    } else {
      throw new Error('missing data')
    }
    const newUser = await User.create(user)
    res.status(201)
    res.json(newUser)
  } catch (error) {
    res.status(500)
    res.send('Something Went Wrong')
    console.log(error)
  }
}

const updateUser = async (req, res, id) => {
  console.log('===> req.params', req.params)
  console.log('===> req.query', req.query)
  console.log('===> req.body', req.body)
  try {
    const user = await User.find(id)

    if (!user) {
      res.status(404, { 'Content-Type': 'application/json' })
      res.json({ message: 'User Not Found' })
    } else {
      const user = req.body
      const updatedUser = await User.update(id, user)

      res.status(200)
      return res.json(updatedUser)
    }
  } catch (error) {
    res.status(500)
    res.send('Something Went Wrong')
    console.log(error)
  }
}
const deleteUser = async (req, res, id) => {
  try {
    const user = await User.find(id)

    if (!user) {
      res.status(404, { 'Content-Type': 'application/json' })
      res.json({ message: 'User Not Found' })
    } else {
      await User.remove(id)
      res.status(200)
      return res.json({ message: `User ${id} removed` })
    }
  } catch (error) {
    res.status(500)
    res.send('Something Went Wrong')
    console.log(error)
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
}
