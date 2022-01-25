/* 
  Given a binary array nums, return the maximum number of 
  consecutive 1's in the array.

  Input: nums = [1,1,0,1,1,1]
  Output: 3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
  /* 
      Use 2 counters - one to count the # of 1s, second to count the # of consectutive 1s
      - Loop over nums array & increment 1s counter when 1 is found
      - If non-1 is found, reset consecutive counter to 0
      - Return the consecutive counter's value when loop is finished
  */

  let onesCounter = 0; // track ones found
  let maximumFound = 0; // track consecutive ones found

  for (let i = 0; i < nums.length; i++) { // Loop over nums
    if (nums[i] === 1) { // 1 found
      onesCounter++; // increment ones counter
      maximum = Math.max(onesCounter, maximumFound); // Set maximum counter to larger of the two
    } else {
      onesCounter = 0; // 1 not found, reset counter
    }
  }

  return maximumFound;
};
