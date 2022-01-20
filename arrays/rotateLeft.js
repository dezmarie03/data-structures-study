/* A left rotation operation on an array shifts each of the array's elements 1 unit to the left. Given a number of rotations, rotate the array that many steps and return the result. */

function rotateLeft(rotations, array) {
  const rotatedArray = array.slice(); // Create a copy

  /*
    Grab the first item in the array & add it to the end of the copy
    to complete a rotation.

    Perform this operation for the # of rotations.
  */

  for (let i = 0; i < rotations; i++) { // Loop for # of rotations
    const firstItem = rotatedArray.shift(); // Remove first item from the copy
    rotatedArray.push(firstItem); // Push first item to the end of the copy
  }

  return rotatedArray;
}
