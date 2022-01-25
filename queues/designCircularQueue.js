class MyCircularQueue {
  constructor(k = 0) {
    this._size = k; // Total size of the queue
    this.storage = []; // Storage array for the queue
    this._length = 0;
    this.headIndex = 0; // Head index position
    this.tailIndex = -1; // Tail index position
  }

  /*
    For enqueue & dequeue, use modular arithmetic 
    to find the appropriate position for the operation 
  */

  enQueue(value) {
    if (this._length >= this._size) {
      return false; // Full; cannot enqueue
    }

    this.tailIndex = (this.tailIndex + 1) % this._size; // Wrap to the end
    this.storage[this.tailIndex] = value; // Insert after the tail
    this._length++; // Increment stored length

    return true;
  }

  deQueue() {
    if (this._length === 0) {
      return false; // Empty; cannot dequeue
    }

    this.headIndex = (this.headIndex + 1) % this._size; // Wrap to the beginning
    this._length--; // Decrement stored length

    return true;
  }

  Front() {
    return this._length === 0 ? -1 : this.storage[this.headIndex]; // Returns -1 if empty or the head
  }

  Rear() {
    return this._length === 0 ? -1 : this.storage[this.tailIndex]; // Returns -1 if empty or the tail
  }

  isEmpty() {
    return this._length === 0; // Returns a boolean
  }

  isFull() {
    return this._length === this._size; // Returns a boolean
  }
}
