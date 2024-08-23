function createCalculator(init) {
  let num;
  function add(num) {
    return num + init;
  }
  function subtract(num) {
    return init - num;
  }
  function multiply(num) {
    return num * init;
  }
  function divide(num) {
    return init / num;
  }
  return { add, subtract, multiply, divide };
}

const calculator = createCalculator(10);

console.log(calculator.add(5)); // 15
console.log(calculator.subtract(3)); // 7
console.log(calculator.multiply(4)); // 40
console.log(calculator.divide(2)); // 5
