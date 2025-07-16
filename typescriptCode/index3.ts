interface User {
username: string,
password: string,
email: string,
age: number,
address?: {
    city: string,
    country: string,
    pincode?: number
}
}

let k: User= {
username: "Harsh",
password: "HarshPass",
email: "harshemail",
age: 84,


}

console.log(k)


interface Address {
city : string,
country : string,
 pincode: number
}

interface User {
username: string,
password: string,
 email: string,
 age: number,
 address: Address
}


let k: User= {
username: "Harsh",
password: "HarshPass",
email: "harshEmail",
age: 84,
address: {
    city: "Bareilly",
    country: "India",
    pincode: 84512
}
}

console.log(k)