function createCounter(n) {
  let count = n;

  return function counter() {
    return count++;
  };
}
