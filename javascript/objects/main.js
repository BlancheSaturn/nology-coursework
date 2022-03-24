/* // OBJECT SYNTAX

const exampleObject = {
    key : "value" , // COMMA FOR OTHRER KEYS
    types : "any",
    method() {
        // DO SOMETHING
        // this keyword is refer to the object
        return this.key + " " + this.types;
    }
}

// ACCESS OBJECTS
// DOT NOTATION
console.log(exampleObject.key)
console.log(exampleObject.types)

// CALLING A METHOD
console.log(exampleObject.method)

//SQUARE BRACKETS
console.log(exampleObject["key"])
console.log(exampleObject["types"])

// ADDING A KEY TO AN OBJECT
exampleObject.newkey = "new value";
console.log(exampleObject); */

const person = {
    firstName: "Charlie",
    lastName: "Richardson",
    getFullName() {
        return '${this.firstName} ${this.lastName}'
    }
}

person.age = 30;
console.log(person);
// FIRST NAME & LAST NAME ONTO THE CONSOLE
console.log(person.firstName + " " + person.lastName)

// GET THE RESULT OF THE METHOD ONTO THE CONSOLE
console.log(person.getFullName())