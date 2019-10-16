/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding: in the global scope, the this keyword's default value is the window object
* 2. Implicit binding: the this keyword will be pointing to the object to the left of the dot
* 3. Explicit binding: using .call/.apply/.bind to explicitly define what the this keyword is
* 4. New binding: 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

var windowBinding = function(){
    console.log(this);
}
windowBinding();


// Principle 2

// code example for Implicit Binding

const person = {
    name: "Nasra",
    age: 22,
    location: "Portland, OR",
    study: "web development",
    greeting: function(){
        console.log(`${this.name} is a ${this.age} year old student from ${this.location} studying ${this.study}.`);
    }
}
person.greeting();

// Principle 3

// code example for New Binding

function animal(sound){
    this.animal = sound;
}

let myPet = new animal ("My pet is Lucy.")

console.log(myPet.animal);

// Principle 4

// code example for Explicit Binding

let student = {
    name: "Nasra",
    attendance: "present"
}

function isHere(){
    console.log(`${this.name} is ${this.attendance}.`)
}

isHere.call(student);