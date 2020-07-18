// We have closures because of two things:
// 1. functions are first class citizens in JavaScript
// 2. Lexical scope, the engine knows where our code is written and what variables each function has access to.

function a() {
  let grandpa = 'grandpa'
  return function b() {
    let father = 'father'
    return function c() {
      let son = 'son'
      return `${grandpa} > ${father} > ${son}`
    }
  }
}

a()()()
// returns the template string
// grandpa and father remain in the memory heap because of the closure that prevents the garbage collector from removing it. They will remain active while they are referenced by the son ('child') function.

// where we write the function matters. Not where we invoke the function.