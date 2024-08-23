function expect(val) {
  function toBe(expectedVal) {
    if (expectedVal === val) {
      return true;
    }
    throw new Error("Not Equal");
  }
  function notToBe(expectedVal) {
    if (val !== expectedVal) {
      return true;
    }
    throw new Error("Equal");
  }
  return { toBe, notToBe };
}
