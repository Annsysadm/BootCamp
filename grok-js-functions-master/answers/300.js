function foo() {
  const x = 42;
  function bar() {
    const y = x * 2;
  }
  bar();
}

foo();

// Значение y = 84 потому что значение x мы получили в результате замыкания.
