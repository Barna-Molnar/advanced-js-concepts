// function sayMyName(name) {
//     console.log(`My name is ${name}`);
// }
// sayMyName('Walter While');
// sayMyName('Heisenberg/


// ORDER OF PRECEDENCE 1.New Binding => 2. Explicit Binding => 3. Implicit Binding =>  4. Default Binding


// IMPLICIT BINDInG
const person = {
    name: 'Barni',
    syMyName: function () {
        console.log(`My name is ${this.name}`);
    }
};

// person.syMyName();

globalThis.name = "Wonder Woman";
// EXPLICIT BINDING
function sayMyName() {
    console.log(` My name is ${this.name}`);
}
// '@EXPLICIT':
sayMyName.call(person);

// NEW BINDING

function Person(name) {
    //this = {}
    this.name = name;
    this.sayMyName = function () {
        console.log(`NEW BINDING: My name is ${this.name}`);
    };
}

const p1 = new Person('Batman');
const p2 = new Person('Superman');
p1.sayMyName();
p2.sayMyName();

// DEFAULT BINDING wenn none of the other rules apply
sayMyName();