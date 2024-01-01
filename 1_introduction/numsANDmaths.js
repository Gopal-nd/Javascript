const number = 100
console.log(number)

const age = new Number(10000000)
console.log(age)
console.log(age.toFixed(2))
console.log(age.toLocaleString())
console.log(age.toLocaleString('en-IN'))
// console.log(age.toPrecision(1))
console.log(age.toString())

// ************** Maths ****************
console.log(Math)
console.log(Math.floor(Math.random()*100+1))
console.log((Math.random()*100+1).toFixed(0))
console.log(Math.min(3,4,5,4,6,3,5,2,6))
console.log(Math.floor(34.4))
console.log(Math.ceil(45.4))
console.log(Math.round(444.623))
console.log(Math.abs(-32))
const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min+1))+min)