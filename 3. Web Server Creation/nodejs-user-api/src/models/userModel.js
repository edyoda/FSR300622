const { users } = require('../jsonData/users.json')
const { writeDataToFile } = require('../utils')

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

module.exports = {
  findAll,
  find,
  create,
}
