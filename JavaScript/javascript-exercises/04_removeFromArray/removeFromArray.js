const removeFromArray = function (nums, ...args) {
  let numsArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (!args.includes(nums[i])) {
      numsArr.push(nums[i]);
    }
  }
  return numsArr;
};

// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
