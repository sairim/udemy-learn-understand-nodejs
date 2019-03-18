// replace module exports object with our own object
function Greetr() {
    this.greeting = 'hello world from greet3';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new Greetr();