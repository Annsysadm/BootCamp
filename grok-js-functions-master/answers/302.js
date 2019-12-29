function foo() {
  const x = 42;
  function bar() {
    const x = 7;
  }
  bar();
  return x;
}

foo();

// Значение x = 42 потому что значение x внутри bar является локальным для функции bar и не влияет на x, объявленный в foo.
