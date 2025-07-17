"use strict";
type User ={
    id: number,
    name: string
}
type Users= Record<string,User>
const users:Users = {
"abc123" : {id: 25, name: "Harsh"},
"xyz":  {id:12548, name: "AnyName"}
}
console.log(users)
interface User {
    id: number,
    name: string
}
type Users= {[key: string]: User}
const users: Users = {
    "abc1223" : {id: 125, name: "Harsh"},
    "xyz" : {id: 124552, name: "Anyname"},
    "scjfhewj" : {id: 12545, name: "jwfewjfnew"}
}
