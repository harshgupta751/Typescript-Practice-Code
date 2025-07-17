//Map

type User= {
    name: string,
    age: number,
    email: string
}

const users = new Map<string,User>()
users.set('abc123', {name: "Harsh", age: 75, email: "HarshEmail"})
users.set('xyz', {name: "Anyname", age: 65, email: "AnyEmail"})

console.log(users)

console.log(users.get('xyz'))
