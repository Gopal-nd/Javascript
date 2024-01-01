console.log("hello");
//premative

/**
 * 7 data types
 * string,number,boolean,Symbol,null,undefined,BigInt
 * 
 * 3 non - premetive data types
  
 * array, objects, functions
 */

//premitive

// String

let name = "Gopal"
console.log(typeof(name))
console.log(name);

//number

let age = 18
console.log(age);
console.log(typeof(age));

//undefined

let anything;
console.log(anything)
console.log(typeof(anything));

//null

let something = null
console.log(something)
console.log(typeof(something))


// symbols

let id = Symbol('123')
let anotherId = Symbol('123')
console.log(id===anotherId)
console.table([id,anotherId])

// boolean

let isUserLogged = true
console.log(typeof(isUserLogged))
console.log(isUserLogged)

// bigInt
let largeNumber = 111123143454666n;
console.log(largeNumber)
console.log(typeof(largeNumber))

// non premitive data types

//array
const arr = ['happy ', 'new' ,'year']
console.log(typeof(arr))
console.log(arr);

//objects

const object = {
    name:"Gopal",
    age:18,
    college:true,
    dayleftTocollege: function date(){
        console.log(this.age)
    }
}
console.log(object)
console.log(typeof(object))

//function

function day(){
    date = new Date()
    console.log(date)
}
console.log(day)
console.log(typeof(day))