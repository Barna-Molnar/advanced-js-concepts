

class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }

    sayMyName() {
        return `${this.firstName} ${this.lastName}!!`;
    }
}

const classP1 = new Person('Bruce', "Wayne");
console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true;
    }
    fightCrime() {
        console.log(`${this.firstName} Fighting Crime`);
    }
}

const classWonerWomen = new SuperHero('Princess', 'Diana');
classWonerWomen.fightCrime();
console.log(classWonerWomen.sayMyName());