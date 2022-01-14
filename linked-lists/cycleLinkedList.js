/* Given the head of a singly linked list, return true if it contains a cycle. */

function hasCycle(head) {
  /*
    Use 2 pointers moving at different speeds.
    -- fast pointer = moves 2 positions
    -- slow pointer = moves 1 position
    If the pointers eventually meet, the list is a cycle
  */

  let fastPointer = head; // Store current head for jumping 2 positions
  let slowPointer = head; // Store current head for jumping 2 positions

  while (fastPointer && fastPointer.next) { // O(n)
    slowPointer = slowPointer.next; // moves 1 position
    fastPointer = fastPointer.next.next; // moves 2 positions

    if (fastPointer === slowPointer) {
      return true;
    }
  }

  return false; // not a cycle
}
