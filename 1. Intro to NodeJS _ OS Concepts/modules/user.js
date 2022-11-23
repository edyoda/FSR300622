function getName() {
  return 'John Doe'
}

const getLocation = () => {
  return 'Munich'
}

const dateOfBirth = '12.01.1982'

module.exports = {
  getName,
  getLocation,
  dob: dateOfBirth,
}
