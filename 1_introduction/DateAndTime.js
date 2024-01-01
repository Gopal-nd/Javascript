let myDate = new Date()
console.log(myDate)
console.log(myDate.toLocaleTimeString())
console.log(myDate.toLocaleString())
console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())


let createdDate = new Date('1/22/2023')
console.log(createdDate)

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(createdDate.getMonth())
console.log(Math.round((Date.now()/1000)));
let star = new Date()
console.log(star.getMonth()+1)


// createdDate.toLocaleString('default',{
//     year:"star",
// })
