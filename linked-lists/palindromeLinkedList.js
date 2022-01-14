/* Given the head of a singly linked list, return true if it is a palindrome */

function reverseList(head) {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

function isPalindrome(head) {
  if (!head) { // Empty list
    return null;
  }

  /*
    Use 2 pointers to find the end & mid-point of the list
    -- fast pointer = checks 2 positions ahead
    -- slow pointer = checks 1 position ahead
    When fast pointer reaches tail, end of list has been reached
    Using midpoint, reverse the second half of the list with reverseList helper function
    Compare the values of the nodes from the first half to second half
  */

  let fastPointer = head; // Store current head for jumping 2 positions
  let slowPointer = head; // Store current head for jumping 1 position

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer.next; // moves 1 position
    fastPointer = fastPointer.next.next; // moves 2 positions
  }

  fastPointer = head; // Return to the head for the first half of the list
  slowPointer = reverseList(slowPointer); // Reverse the second half of the list

  while (slowPointer) {
    if (slowPointer.val !== fastPointer.val) {
      return false; // not a palindrome :(
    }

    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return true;
}
