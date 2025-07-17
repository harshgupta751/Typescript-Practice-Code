"use strict";
let c:number=19
let d=20
console.log(c+d)
function u(user:{
    username: string,
    email: string,
    password: string,
    age: Number
}){
console.log(user.email)
}
u({username: "Harsh Gupta",
    email: "randomEmail",
    password: "sehewj452",
    age: 85
})
