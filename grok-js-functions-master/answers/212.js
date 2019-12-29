function foo(a) {
  function bar(b) {
    return b * 2;
  }
  return a * 3;
}

foo(2);

// Результат bar неизвестен, ведь мы не вызываем bar.
// Результат foo = 6
// Параметры foo = a
// Параметры bar = b
