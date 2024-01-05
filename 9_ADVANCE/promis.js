// //first

// const thing = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("game completed")
//         resolve()
//     },1000)
// })
// thing.then(()=>{
//     console.log("game over");
// })

// //second
// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("game completed")
//         resolve()
//     },1000)
// }).then(()=>{
//     console.log("game over");
// })

// //third

// new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("game completed")
//         resolve({user:"Gopal",email:'ceo@google.com'})
//     },1000)
// }).then((respone)=>{
//     console.log(respone.user)
//     console.log("game over");
// })

// //four
// const promise = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = false
//         if(!error){
//             resolve({usernae:"Gopal Reddy",email:"1sb22ai023@vtu.edu.in"})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })

// promise.then((res)=>{
//     const {usernae,email} = res;
//     console.log(res)
//     console.log(`from 1st then ${usernae}`)
//     return email
// }).then((email)=>{
//     console.log(email)
// }).catch((res)=>{
//     console.log(res)
// }).finally(()=>{
//     console.log("the promise is either resolved or rejected")
// })

// //five
// // async await
// const promisefive = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error = true
//         if(!error){
//             resolve({usernae:"Javascript",password:"123"})
//         }else{
//             reject("something went wrong")
//         }
//     },1000)
// })
// const five = async()=>{
//     try {

//         const res = await promisefive
//         console.log(res)
//     } catch (error) {
//         console.log(error)
//     }
// }
// five()

// using async and await

// const getallusers = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     // console.log(typeof res);
//     // console.log(res);
//     const data = await res.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };
// getallusers();

//using Promisies
 fetch("https://jsonplaceholder.typicode.com/users")
 .then((res)=>{
    return res.json()
 }).then((res)=>{
    console.log(res)
 }).catch((err)=>{
    console.log(err)
 }).finally(()=>{
    console.log("job done")
 })