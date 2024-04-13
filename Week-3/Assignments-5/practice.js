function twoSum(nums, target) {
  // your code here
  let answer = [];
  nums.forEach((num, index, arr) => {
    for (let i = index + 1; i < arr.length; i++) {
      if (num + arr[i] === target) {
        answer.push(index, i);
        break;
      }
    }
  });
  return answer;
}

console.log(twoSum([2, 7, 11, 15], 9));
/*
    For example:
    twoSum([2, 7, 11, 15], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0]+nums[1] is 9
    */
