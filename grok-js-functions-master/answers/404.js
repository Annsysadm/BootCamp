function foo(f) {
  return f();
}

function bar() {
  return 42;
}

foo(bar);

// Результат foo = 42 потому что она возвращает то, что вернет вызов функции bar.
