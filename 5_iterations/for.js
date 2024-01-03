// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


const arr = [1,2,3,4,23,3,46,67,79]

for(const num of arr){
    console.log(num)
}
const Gret = "hello world";
for (const great of Gret) {
    console.log(`${great} is the Best`)
}

//Map

let map = new Map()
map.set("IN","India")
map.set("EN","England")
map.set("Ca","Canada")

for (const [value, key] of map) {
    console.log(value,key)
}