function foo(f) {
  return f();
}

function bar() {
  return 42;
}

foo(bar());

// Программа выполнится с ошибкой, потому что f не является функцией, а числом 42.
