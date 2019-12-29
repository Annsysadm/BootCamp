function foo(a) {
  function bar(b) {
  }
  bar()
}

// Результат выполнения bar неизвестен, т.к. bar не вызывается, ведь мы не вызывали foo.
