// exploring different require / export module patterns

// exporting entire module exports object
const greet = require('./greet1');
greet();

// exporting specific method from module exports object
const greet2 = require('./greet2').greet;
greet2();

// replace module exports object with our own object
const greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed hello world from greet3!';

// greet3b will point to the same object as greet3 due to nodejs module caching
const greet3b = require('./greet3');
greet3b.greet();

// export the ability to create a Greetr object, used to get around module caching if desired
const Greet4 = require('./greet4');
const grtr4 = new Greet4();
grtr4.greet();
grtr4.greeting = 'Changed hello world from greet4';

// creates a new Greetr object for grtr4b to refer too, circumventing caching
const grtr4b = new Greet4();
grtr4b.greet();

// greet5 will be the greet object we chose to reveal
const greet5 = require('./greet5').greet;
greet5();





