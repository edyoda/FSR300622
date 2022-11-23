const fs = require('fs')
process.stdin.on("data", data => {
  data = data.toString()
  fs.writeFileSync("test.json", data)
  const read = fs.readFileSync("test.json")
  console.log("read.toString())
  process.exit()
})