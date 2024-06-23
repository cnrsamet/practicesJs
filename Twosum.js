let numbers = [2, 7, 11, 15];
let target = 9;

let twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; i < nums.length; j++) {
        if( nums[i] + nums [j] === target){
            return [i,j];
        }
    }
  }
  return null;
};

console.log(twoSum(numbers, target));