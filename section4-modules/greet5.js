// reviewing module pattern
// exposing only the properties and methods we want via a return object
var greeting = 'Hellow world from greet5';

function greet() {
    console.log(greeting);
}

module.exports = {
    greet: greet
}