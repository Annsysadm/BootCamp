function foo(a) {
  function bar(b) {
    return b * 2;
  }
  return a + bar(a);
}

foo(4);

// Результат bar = 8
// Результат foo = 12
// Аргументы foo = 4
// Аргументы bar = 4
