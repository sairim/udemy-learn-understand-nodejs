// replace module exports object with `the ability to create our own object`,
// which provides a way to get around module caching if desired
function Greetr() {
    this.greeting = 'hello world from greet4';
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = Greetr;