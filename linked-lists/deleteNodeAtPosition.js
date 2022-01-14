/*
  Delete the node at a given position in a linked list & 
  return a reference to the head node. The head is at position 0. 
  The list may be empty after you delete the node. In that case, return a null value.
*/

function deleteNode(head, index) {
  if (!head || !head.next) { // Empty list or head
    return null;
  }

  if (index === 0) { // Head was requested, so return it
    return head.next;
  }

  let node = head; // Store the head node

  // Loop through just the nodes that come before the one to be deleted
  for (let i = 1; i <= index - 1; i++) { // O(n)
    // TODO: case for when an index is passed that's larger than the length of the list
    node = node.next; // Update pointers
  }

  node.next = node.next.next; // Unlink the node from the node that came before it
  return head;
}
