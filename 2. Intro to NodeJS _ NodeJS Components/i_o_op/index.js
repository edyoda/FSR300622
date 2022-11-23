process.stdout.write("Hola! como estas?\n")

process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    console.log(data)
})

