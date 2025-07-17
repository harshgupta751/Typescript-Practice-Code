//Pick, Partial

interface User {
username: string,
password: string,
email: string,
age: number
}

type UserProfile= Pick<User,'username' | 'email'>
type UpdatedProfile= Partial<UserProfile>
function temp(user:UpdatedProfile){
console.log(`Username: ${user.username}, Email: ${user.email}`)

}

temp({username: "Harsh"
})




