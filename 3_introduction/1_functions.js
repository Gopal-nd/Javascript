console.log("Functions")

const user = {
    username:"Gopal",
    age:18,
    welcome: function(){
        console.log(`${this.username}, welcome`)
        console.log(this)
    }
}
user.welcome()
user.username = "reddy"
console.log(this)
console.log(user)

function jai(){
    console.log(this)
}
// jai()

// function hai(){
//     i=1
//     console.log(i)
//     i++
//     hai()
// }
// hai()

// immedeatly invoked function expresion
(function sayhi(){
    console.log("say hi")
})();
((name)=>{
    console.log("say hi",name)
})("Gopal")