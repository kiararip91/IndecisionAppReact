var nameVar = "Andrew"
var nameVar = "Pippo" // valid

console.log("nameVar",nameVar)

let nameLet = "Jen"
//let nameLet = "Jhon" // not valid
console.log("nameLet",nameLet)

const nameConst = "Will"
//const nameConst = "Sophie" //not valid
//nameConst = "Olly" // not valid
console.log("nameConst", nameConst)

const fullName = "Chiara Rip"
let firstName;

if(fullName){
    firstName = fullName.split(" ")[0]
}

console.log(firstName)