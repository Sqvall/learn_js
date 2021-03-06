const wrapValue = (n) => {
  const local = n
  return () => local
}

const wrap1 = wrapValue(1)
const wrap2 = wrapValue(2)

console.log(wrap1())
console.log(wrap2())

const multiplier = (factor) => {
  return (number) => number * factor
}

const twice = multiplier(2)
console.log(twice(5))

const three = multiplier(3)(5)
console.log(three)

const sum = (num) => {
  console.log(num)
  return function func () {
    console.log(num * arguments[0])
    return func
  }
}

sum(1)
sum(2)(5)(9)
