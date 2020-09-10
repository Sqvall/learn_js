function curry (f) { // curry(f) выполняет каррирование
  return function (a) {
    return function (b) {
      return f(a, b)
    }
  }
}

// использование
function sum (a, b) {
  return a + b
}

const carriedSum = curry(sum)

console.log(carriedSum(1)(2)) // 3
