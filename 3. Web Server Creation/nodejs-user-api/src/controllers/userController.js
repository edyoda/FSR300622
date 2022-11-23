const User = require('../models/userModel')
const { getUserData } = require('../utils')

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll()
    res.writeHead(200, {
      'Content-Type': 'json',
    })
    res.end(JSON.stringify(users))
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'json',
    })
    res.end('Something Went Wrong')
    console.log(error)
  }
}

const getUser = async (req, res, id) => {
  try {
    const user = await User.find(id)

    if (!user) {
      res.writeHead(404, {
        'Content-Type': 'json',
      })
      res.end(JSON.stringify({ message: 'User Not Found' }))
    } else {
      res.writeHead(200, {
        'Content-Type': 'json',
      })
      res.end(JSON.stringify(user))
    }
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'json',
    })
    res.end('Something Went Wrong')
    console.log(error)
  }
}
const createUser = async (req, res) => {
  try {
    const body = await getUserData(req)
    const { firstName, lastName, maidenName, age, gender, email } =
      JSON.parse(body)
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
    res.writeHead(201, {
      'Content-Type': 'json',
    })
    res.end(JSON.stringify(newUser))
  } catch (error) {
    res.writeHead(500, {
      'Content-Type': 'json',
    })
    res.end('Something Went Wrong')
    console.log(error)
  }
}

module.exports = {
  getUsers,
  getUser,
  createUser,
}
