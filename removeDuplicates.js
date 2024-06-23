let numbers = [1, 1, 2];

var removeDuplicates = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = "_";
  }
  return k;
};

let k = removeDuplicates(numbers);
console.log(k, "nums =", numbers);