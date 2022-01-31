/*
  
  Input: 
  digits = [1,2,3]

  Output:
  digits = [1,2,4]

  ---

  Input:
  digits = [9]

  Output:
  digits = [1,0]
*/

function plusOne(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] !== 9) {
      digits[i]++;
      return digits;
    }

    if (digits[i] === 9) { // Handle LC's 9 case
      digits[i] = 0;
    }
  }

  // Return a new array containing 1 & a shallow copy of digits array
  return [1, ...digits];
}
