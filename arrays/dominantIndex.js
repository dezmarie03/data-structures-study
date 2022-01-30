/*
  Input:
  nums = [3,6,1,0]

  Output: nums[1] (6)
*/

function dominantIndex(nums) {
  if (nums.length === 0) return -1; // empty array
  if (nums.length === 1) return 0; // array contains 1 element

  let maxNumIndex = -1; // default return if none found
  let maxNum = -1; // for comparisons against 0 in nums array

  // Find largest number & its index
  for (let i = 0; i < nums.length; i++) {
    if (maxNum < nums[i]) {
      maxNum = nums[i];
      maxNumIndex = i;
    }
  }

  // Check if first or last element is 2x larger
  if (nums[0] !== maxNum && nums[0] * 2 > maxNum) return -1;
  if (nums[nums.length - 1] !== maxNum && nums[nums.length - 1] * 2 > maxNum) return -1;

  // Run over array again to check remaining elements
  for (let i = 0; i < nums.length; i++) {
    // If element that's 2x larger is found, end loop
    if (nums[i] * 2 > maxNum && nums[i] !== maxNum) return -1;
  }

  return maxNumIndex;
}
