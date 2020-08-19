foo = 3;
console.log('Half the number of widgets is ' + (foo / 2));
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
        this.greet();
    }
    Greeter.prototype.greet = function () {
        return console.log('Hello, ' + this.greeting);
    };
    return Greeter;
}());
var greeter = new Greeter('world');
greeter.greet();
//# sourceMappingURL=test2.js.map