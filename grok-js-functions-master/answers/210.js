function foo(a) {
  function bar(b) {
  }
  bar();
}

foo();

// Результат bar = undefined
// Результат foo = undefined
