"use strict";
function maxNumber(a) {
    let m = -1000000;
    for (let i = 0; i < a.length; i++) {
        if (a[i] > m) {
            m = a[i];
        }
    }
    return m;
}
function isLegal(usersArray) {
    const ans = usersArray.filter((user) => user.age > 18);
    return ans;
}
console.log(isLegal([{
        firstname: "startname",
        lastname: "sirname",
        age: 21
    }]));
