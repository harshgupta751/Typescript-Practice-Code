interface User {
username: string,
age: number
}

class Manager implements User {
username: string;
age: number;

constructor(username: string, age : number, email: string){
this.username= username,
this.age= age
this.email=email
}
email: string
}

const user= new Manager("Harsh",84 , "emaail")
console.log(user)

abstract class User {
username: string;
constructor(username: string){
this.username= username
}
abstract greet():string;
hello(){
    console.log("Hi There")
}

}
class Employee extends User {
    username: string;
constructor(username: string ){
super(username)
this.username= username
}
greet(){
return "Hi" + this.username

}

}

const person= new Employee("Harsh")
person.hello()








