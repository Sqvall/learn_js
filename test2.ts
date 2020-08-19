declare var foo: number;
foo = 3;

// Intend exception error!
// foo = '23';

console.log('Half the number of widgets is ' + (foo / 2));

class Greeter {
  greeting: string;

  constructor (message: string) {
    this.greeting = message;
    this.greet();
  }

  greet () {
    return console.log('Hello, ' + this.greeting);
  }
}

const greeter = new Greeter('world');
greeter.greet();
