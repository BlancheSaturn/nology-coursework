"use strict";

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
var person = {
  firstName: "Charlie",
  lastName: "Richardson",
  quote: "It doesn't get easier, you just go faster",
  skills: [hteml, css, javascript],
  getFullName: function getFullName() {
    return '${this.firstName} ${this.lastName}';
  }
}; // WRITE A METHOD ON THE PERSON OBJECT THAT USES THE SKILLS ARRAY
// ITERATE OVER THE SKILLS ARRAY AND GENERATE A LIST ITEM FOR EACH SKILL 
// E.G <li>html</li>

person.age = 30;
/* console.log(person);
// FIRST NAME & LAST NAME ONTO THE CONSOLE
console.log(person.firstName + " " + person.lastName)

// GET THE RESULT OF THE METHOD ONTO THE CONSOLE
console.log(person.getFullName()) */