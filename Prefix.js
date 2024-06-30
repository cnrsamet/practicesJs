const longestCommonPrefix = function (strs) {
  if (strs.length === 0) {
    return "";
  }
  let referenceString = strs[0];
  for (let i = 0; i < referenceString.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] === undefined || referenceString[i] !== strs[j][i]) {
        return referenceString.slice(0, i);
      }
    }
  }
  return referenceString;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));