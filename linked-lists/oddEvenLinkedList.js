/*
  Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices and return the reordered list.
*/

function oddEvenList(head) {
  if (!head) { // Empty list
    return null;
  }

  /*
    Use head node as first odd node.
    Use second node as first even node.
    Use odd nodes' next pointers to find the next even nodes, 
    and use the even nodes' next pointers to find the next odd nodes.
  */

  let odd = head; // First odd node; start of its list
  let even = head.next; // First even node; start of its list
  let evenHead = even; // Store head node for the even list

  while (even && even.next) {
    // Update odd node pointers
    odd.next = even.next;
    odd = odd.next;

    // Update even node pointers
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead; // Join the two lists
  return head;
};
