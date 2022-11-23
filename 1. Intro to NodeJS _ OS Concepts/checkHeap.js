let arr1 = Array(1e6).fill('some string')
let arr2 = Array(1e6).fill('some string')
let arr3 = Array(1e6).fill('some string')

// let arr3 = arr1
// let arr4 = arr2
// delete arr1
// delete arr2

// const memoryInMB = process.memoryUsage().heapUsed / 1024 / 1024
// console.log(
//   `===> Used heap is approximately :${Math.round(memoryInMB * 100) / 100} MB`
// )
console.log(process.memoryUsage())