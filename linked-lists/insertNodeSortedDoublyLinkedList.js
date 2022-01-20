class DoublyLinkedListNode {
  constructor(value = null, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

function sortedInsert(head, value) {
  let newNode = new DoublyLinkedListNode(value); // next & prev are null

  if (!head) { // Empty list
    return newNode;
  }

  let node = head; // Store the current head

  if (value < node.value) { // Value is smaller than the current head's value
    newNode.next = node; // New node's next pointer points to head
    head.prev = newNode; // Head's previous pointer points to new node
    newNode.prev = null;

    return newNode; // New node is the head
  }

  // Loop over nodes with smaller values
  while (node.next && node.value < value) {
    node = node.next; // Move to the next node
  }

  // Node's value is larger or equal to value; insert between
  if (node.value >= value) {
    newNode.prev = node.prev; // Point new node's prev pointer to node's prev pointer
    newNode.next = node; // Point new node's next pointer to node
    node.prev.next = newNode; // Update node 1 position behind node
    node.prev = newNode; // Point node's prev pointer to new node

    return head; // Return the updated list
  }

  // Insert after the head
  node.next = newNode;
  newNode.prev = node;

  return head;
}
