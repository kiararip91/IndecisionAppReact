const getFirstName = (fullName) => {
    return fullName.split(" ")[0]
}

const getFirstNameShort = (fullName) => fullName.split(" ")[0]

//this keyword is not available in arrow function
const user = {
    name: "Chiara",
    age: 28,
    cities: ["Pescara", "Ancona", "Rome", "London"],
    listCities: function(){
        this.cities.forEach((city) => {
            console.log(this .name + " has lived in " + city) // qui invece se uso una arrow function funziona perche non binda il proprio valore per this
        })
        console.log(this.cities) // se fosse una arrow funcion non potrei usare this!
    },
    listCities2(){ // posso unsare anche questa sintassi per le funzioni
        this.cities.forEach((city) => { 
            console.log(this.name + " has lived in " + city) // qui invece se uso una arrow function funziona perche non binda il proprio valore per this
        })
        console.log(this.cities) // se fosse una arrow funcion non potrei usare this!
    }
}

user.listCities()

const multiplier = {
    numbers: [1,2,3],
    multiplier: 3,
    multiply(){
        return this.numbers.map((number)=> number*this.multiplier)
    }
}

console.log(multiplier.multiply())