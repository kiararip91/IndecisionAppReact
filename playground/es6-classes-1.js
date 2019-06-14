class Person{
    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }

    getGreating(){
        return `Hi ${this.name}!`
    }

    getDescription(){
        return `${this.name} has ${this.age} years old`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }

    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription();
        description += `their major is ${this.major}`
        return description
    }
}

class Traveller extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGreating(){
        if(this.homeLocation){
            return `${super.getGreating()}, I am visiting from ${this.homeLocation}`
        }

        return super.getGreating()
    }


}

const chiara = new Traveller("Chiara", 28, "Rome")
console.log(chiara.getGreating())

const sara = new Traveller("Sara", 28)
console.log(sara.getGreating())