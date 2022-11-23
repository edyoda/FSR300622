const { users } = require('../jsonData/users.json')
const { writeDataToFile } = require('../utils')
const path = require('path')
const findAll = () => {
  return new Promise((resolve, reject) => {
    resolve(users)
  })
}
const find = (id) => {
  return new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === +id)
    resolve(user)
  })
}

const create = (newUser) => {
  return new Promise((resolve, reject) => {
    users.push(newUser)
    const data = { users: users, total: 100, skip: 0, limit: 30 }
    if (process.env.STATUS === 'dev') {
      writeDataToFile('.\\src\\jsonData\\users.json', data)
    }
    resolve(newUser)
  })
}

const update = (id, user) => {
  return new Promise((resolve, reject) => {
    const index = users.findIndex((u) => u.id === +id)
    const oldUser = users[index]
    users[index] = { id, ...oldUser, ...user }
    const data = { users, total: 100, skip: 0, limit: 30 }
    if (process.env.STATUS === 'dev') {
      writeDataToFile('.\\src\\jsonData\\users.json', data)
    }
    resolve(users[index])
  })
}

const remove = async (id) => {
  return new Promise((resolve, reject) => {
    const newUsers = users.filter((u) => u.id !== +id)
    const data = { users: newUsers, total: 100, skip: 0, limit: 30 }
    if (process.env.STATUS === 'dev') {
      writeDataToFile('.\\src\\jsonData\\users.json', data)
    }
    resolve()
  })
}

module.exports = {
  findAll,
  find,
  create,
  update,
  remove,
}
