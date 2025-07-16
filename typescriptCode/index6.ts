function maxNumber(a: number[]){
let m= -1000000
for(let i=0;i<a.length;i++){
    if(a[i]>m){
        m=a[i]
    }
}

return m
}

interface User {
    firstname: string,
    lastname: string,
    age:number
}
function isLegal(usersArray: User[]){
const ans= usersArray.filter((user)=> user.age>18)
return ans;
}

console.log(isLegal([{
    firstname:"startname",
    lastname: "sirname",
    age: 21
}]))


