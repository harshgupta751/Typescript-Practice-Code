//Readonly

interface Config {
endPoint: string,
 apiKey: string
}

let config: Readonly<Config> = {
    endPoint: "anyLink",
    apiKey: "anyApiKey"
}

console.log(config.endPoint)

const arrayNumber=[1,2,3,4,,5,6]
arrayNumber[2]=19
console.log(arrayNumber)


const tempObj={
username: "Harsh",
email: "HarshEmail",
password: "HarshPassword",
age: 75
}

tempObj.email= "MohanEmail"
console.log(tempObj)


tempObj={
firstname: "Harsh",
email: "HarshEmail",
password: "HarshPassword",
age: 75

}