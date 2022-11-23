const main = () => {
  const n = 10

  const obj = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
  }

  function print(data) {
    let greet = 'Hello There'
    console.log(greet, data)
  }

  print(n)
  print(obj)
}

main()
