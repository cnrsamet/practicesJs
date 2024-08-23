function createCounter(init) {
  let count = init;

  function increment() {
    return ++count;
  }
  function reset() {
    count = init;
    return count;
  }
  function decrement() {
    return --count;
  }
  return { increment, reset, decrement };
}

const counter = createCounter(5);
