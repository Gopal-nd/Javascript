console.log('heap and stack memory')

// stack (Primitive)  Heap(non-premative)

let name = "gopal"
let fullname = name;
let full = "Gopal ND"
console.log(name);
console.log(full)

// Heap (Non Premitive)

const userOne = {
    name:"Gopal",
    class:14
}
let userTwo = userOne;
userTwo.name = "Gopal Reddy N D"
console.log(userOne.name)
console.log(userTwo.name)