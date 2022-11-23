class User {
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  getUserStats() {
    return `
      Name: ${this.name}
      Age: ${this.age}
      Email: ${this.email}
    `
  }
}

const foo = 'Foo'
const bar = () => console.log('Bar')
// exports.User = User
// module.exports = User
module.exports = { Person: User, me: foo, barFn: bar }
