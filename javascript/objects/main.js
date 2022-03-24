// OBJECT SYNTAX

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

exampleObject.newkey = "new value";
console.log(exampleObject);