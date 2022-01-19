class SinglyLinkedListNode {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

function singlyLinkedListFromArray(array = []) {
  let head = new SinglyLinkedListNode(array[0]);
  let current = head;

  for (let i = 1; i < array.length; i++) {
    let newNode = new SinglyLinkedListNode(array[i]);

    current.next = newNode;
    current = current.next;
  }

  return head;
}

function printSinglyLinkedList(head) {
  let current = head;
  let printStr = "";

  while (current) { // O(n)
    printStr += current.value + "->";
    current = current.next;
  }

  console.log(printStr);
}

// const head = singlyLinkedListFromArray([1,2,3]);
// printLinkedList(head);
