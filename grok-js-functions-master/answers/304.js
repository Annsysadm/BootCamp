function foo() {
  let x = 42;
  function bar() {
    let x = 7;
    function baz() {
      return x;
    }
    return baz();
  }
  return bar();
}

foo();

// Результат foo = 7 потому что x переопределен в bar и baz использует x из контекста bar
