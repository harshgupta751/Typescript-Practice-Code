"use strict";
// // type Person = {
// //   firstname: string,
// //   lastname: string,  
// //   age: number | string
// // }
// // type Student = {
// // year: number,
// // cgpa: number
// // }
// // type People= Person & Student
// // let user: People= {
// //     firstname: "Harsh",
// //     lastname: "Gupta",
// //     age: 85,
// //     year: 2,
// //     cgpa:9.2
// // }
// // console.log(user)
// // type Employee= Person | Student
// // let employee: Employee= {
// // firstname: "Harsh",
// // lastname: "Gupta",
// // age: "85"
// // }
// // console.log(employee)
// // type temp= string | number
// // interface Person {
// //     firstname: string,
// //     lastname: string,
// //     age: number
// // }
// // interface Student {
// //     year: number,
// //     cgpa: number
// // }
// // type People= Person & Student
// // type Employee= Person | Student
// // // const user: Person = {
// // //     firstname: "Harsh",
// // //     lastname: "Gupta",
// // //    age: 81
// // // }
// // // console.log(user)
// type Admin= {
//     name: string,
//     permissions: string
// }
// type User= {
//     name: string,
//     age: number
// }
// type RequiredType= Admin | User
// function greet(user: RequiredType){
// console.log("Welcome " + user.name)
// }
// greet({
//     name:"Harsh",
//   age: 81
// })
