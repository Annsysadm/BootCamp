function foo(a) {
  function bar(b) {
    return b * 2;
  }
  return a + bar(3);
}

foo(4);

// Результат bar = 6
// Результат foo = 10
