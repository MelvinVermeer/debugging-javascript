const { fibMem, fibRecusive, fibWhile } = require('./00-fib')
console.clear()

const n = 44;

console.log(`-- calulating fibonacci(${n}) --`)

console.time('recursive')
fibRecusive(n)
console.timeEnd('recursive')

console.time('loop')
fibWhile(n)
console.timeEnd('loop')

console.time('memoize')
fibMem(n)
console.timeEnd('memoize')