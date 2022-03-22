const name = "Blanche";

if (name == "Blanche") {
    console.log("It's a coach")
}

const greeting = "bonjourno";
if (greeting == "bonjour") {
    console.log("comment ca va")
}

const score =10;
if (score == "10") {
    console.log("Congratulations, you won!")
}

let age = 50;
if (age >= 65) {
    console.log("Time to retire I'm afraid")
}

//const log = "hasCovid"
//if ( log == "hasCovid") {
//    console.log("time to isolate")
//} else {
//    console.log("Keep social distancing")
//}

const hasCovid = false;
const isShielding = true;
if (hasCovid || isShielding) {
    console.log("time to isolate") 
 } else {
     console.log("keep social distancing")
 }

 const isBritish = true;
 age = 18;
if (age > 17 && isBritish) {
    console.log("Have you registered to vote?")
}