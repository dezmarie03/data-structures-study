class DoublyLinkedListNode {
  constructor(val = null, prev = null, next = null) {
    this.val = val;
    this.prev = prev;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = new DoublyLinkedListNode(); // empty head
    this.tail = new DoublyLinkedListNode(); // empty tail
    this.length = 0;
    this.head.next = this.tail; // point head to the tail
    this.tail.prev = this.head; // point tail to the head;
  }

  get(index) {
    if (index < 0 || index >= this.length) { // Index is out of range
      return -1;
    }

    let current = this.head.next; // Store pointer to node after the head

    while (index--) { // 0 will coerce to false & end the loop - O(n)
      current = current.next;
    }

    return current.val;
  }

  addAtHead(val) {
    let prev = this.head;
    let next = this.head.next;

    // Create new node between the head & the node that comes after it
    let newNode = new DoublyLinkedListNode(val, prev, next); // O(1)

    prev.next = newNode; // Update the head
    next.prev = newNode; // Update the node that was previously after the head

    this.length++; // Increment stored length
  }

  addAtTail(val) {
    let prev = this.tail.prev;
    let next = this.tail;

    // Create new node between the tail & the node that comes before it
    let newNode = new DoublyLinkedListNode(val, prev, next); // O(1)

    prev.next = newNode; // Update the node that was previously before the tail
    next.prev = newNode; // Update the tail

    this.length++; // Increment stored length
  }

  addAtIndex(index, val) {
    if (index < 0 || index > this.length) { // index is out of range
      return null;
    }

    if (index === this.length) { // index is at the tail
      this.addAtTail(val);
      return;
    }

    let prev = this.head; // Store head node

    while (index--) { // 0 will coerce to false & end the loop - O(n)
      prev = prev.next;
    }

    let next = prev.next; // Store pointer to node that comes after the loop has stopped

    // Create the new node
    let newNode = new DoublyLinkedListNode(val, prev, next); // O(1)

    prev.next = newNode;
    next.prev = newNode;

    this.length++; // Increment stored length
  }

  deleteAtIndex(index) {
    if (index < 0 || index >= this.length) { // index is out of range
      return null;
    }

    let prev = this.head; // Store head node

    while (index--) { // 0 will coerce to false & end the loop - O(n)
      prev = prev.next;
    }

    let next = prev.next.next; // Store pointer to the node that comes after the one that's being deleted

    prev.next = next;
    next.prev = prev;

    this.length--; // Decrement stored length
  }
}
