function foo(a) {
  return (function (b) {
    return b;
  })(a);
}

foo(10);

// Результат foo = 10
// Аргументы foo = 10
// Аргументы анонимной функции = 10
