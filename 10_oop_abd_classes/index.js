let user = 'single       '
String.prototype.truelength = function(){
    // console.log(this)
    return `True Length is : ${this.trim().length}`
 
}
console.log(user.trim().length)
const ans = user.truelength()
console.log(ans)
'we are'.truelength()

class users {
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value

    }
}
const gopal = new users("student@sairam.in",'hdsj')
console.log(gopal.password)
console.log(gopal.email)





function koolii(email,password){
    this._email= email
    this._password = password

    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email= value
        }
    }),

    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password= value
        }
    })
}
const kooli = new koolii("shch@hdh.com",'jdksfiko')

console.log(kooli.email)
console.log(kooli.password)
//const tea = Object.create(user)
// not=/=new 