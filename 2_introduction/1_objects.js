// objects
console.log("welcome to Objects Lecture");

// Object.create()// 
// object singlone

// Object Litrels 

const mySymbol =  Symbol("123Boss")
const User ={
    name:"Gopal",
    [mySymbol]:"Key",
    age:18,
    class:14,
    college:"Sai ram College",
    languages:["telugu","kannada","Hindi"],
    "fees":10000,
}

console.log(User.fees)
console.log(User["age"])

User.greeting = function one(){
    console.log("How are You");
};
User.greetingTow = function two(){
    console.log(`How are you ${this.name}`)
}
// Object.freeze(User)
console.log(User.greeting())
console.log(User.greetingTow())
console.log(User)

// single tone objects

const TinderUser = {}

const obj1 = {1:1,2:2}
const obj2 = {3:3,4:4}
const obj0 = {5:5,6:6}

const obj3 = {obj1,obj2}
console.log(obj3)
const obj4 = Object.assign({},obj1,obj2,obj0)
console.log(obj4)

//spred
const ob = {...TinderUser,...obj0,...obj2,...obj1}
console.log(ob.hasOwnProperty(5))
console.log(Object.keys(User));
console.log(Object.values(User));

// destructuring