console.log("new arrays")

const marvalHeros = ["Thor","spiderMan","IronMan","Hulk"]
const dcHeros = ["SuperMan","flash","BatMan"]

let OverAllHeros = marvalHeros.concat(dcHeros);
console.log(OverAllHeros, marvalHeros)

console.log([...OverAllHeros,...dcHeros,...marvalHeros])

const list = [1,23,4,5,[3,2,4,[4]],34,35,[3,4,56,3,4,[4,2,4,[4,3,5],34],43],2,667,75]
console.log(list.flat(Infinity));

// importent array methods

// isArray      ,Array.from("sdjfhjsddsjk")
// Array.of()

console.log(Array.isArray(OverAllHeros))
console.log(Array.isArray([1,23,4,5,6]))
console.log(Array.isArray(1,2,3,4,5,6,7,8,9))
console.log(Array.isArray("hdsjfhjk"))


console.log(Array.from("dsjddddddsfhfuirehhhhhhvgftrhvfr"))
console.log(Array.from({name:"Gopal",age:18,Year:2005}))
console.log(Array.of(12,2,3,4,5,6,7,8,...OverAllHeros,...marvalHeros,...dcHeros))