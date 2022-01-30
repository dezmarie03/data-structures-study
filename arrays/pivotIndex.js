/*
  Input:
  nums = [1,7,3,6,5,6]

  Output: nums[3] (6)
*/

function pivotIndex(nums) {
  if (nums.length === 0) return -1; // empty array

  let leftSum = 0;
  let rightSum = nums.reduce((a, b) => a + b); // get sum of entire array; O(n)

  for (let i = 0; i < nums.length; i++) { // O(n)
    if (rightSum - leftSum - nums[i] === leftSum) return i; // pivot index found

    leftSum += nums[i]; // add index value to leftSum
  }

  return -1; // no pivot index found
};
