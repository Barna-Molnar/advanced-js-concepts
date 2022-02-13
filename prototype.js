function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
}

Person.prototype.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
};

const person1 = new Person('Bruce', 'Wayne');
const person2 = new Person('Clark', 'Kent');

// person1.getFullName = function () {
//     return `${this.firstName} ${this.lastName}`;
// };

// console.log(person2.getFullName()); // <= error 

// console.log(person1.getFullName());
// console.log(person2.getFullName());

function SuperHero(fName, lName) {
    // this = {} crerated by calling the function with a new a keyword
    Person.call(this, fName, lName);
    this.isSuperHero = true;
}
SuperHero.prototype.fightCrime = function () {
    console.log(`Fight Crime`);
};
SuperHero.prototype = Object.create(Person.prototype);
SuperHero.prototype.constructor = SuperHero; // to make  sure the cunstructor function remain the original function 

const greenArrow = new SuperHero('Oliver', 'Queen');


console.log(greenArrow.constructor);