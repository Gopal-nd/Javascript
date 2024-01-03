// forof
//forin
//forEach

const User ={
    name:"Gopal",
    // [mySymbol]:"Key",
    age:18,
    class:14,
    college:"Sai ram College",
    languages:["telugu","kannada","Hindi"],
    "fees":10000,
}

for (const key in User) {
    console.log(`${key} = ${User[key]}`)
}

for (const key in User) {
    console.log(`${key} = ${User[key]}`)
}
const program = ['html','css','python','cpp','c','javascript','java'];
for (const key in program) {
    console.log(key,program[key])
}

// for each

const coding = ['html','css','python','cpp','c','javascript','java'];

coding.forEach( (item)=>{
    console.log(item)
} )

function guru(item){
    console.log(item)+1
}
coding.forEach(guru)
coding.forEach((tem,i,bod)=>{
    console.log(tem,i,bod)
})

const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = mynum.filter((num)=>(num >4))
console.log(newnum);
