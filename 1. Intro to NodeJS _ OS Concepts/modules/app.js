// const User = require('./userClass')
const { Person: myPerson, me, barFn } = require('./userClass')
// const john = new User.Person('John', '10', 'john@gmail.com')
const john = new myPerson('John', '10', 'john@gmail.com')

// console.log(john)
// console.log(User.me)
// console.log(User.barFn())
console.log(john)
console.log(me)
console.log(barFn())



const express = require('express')