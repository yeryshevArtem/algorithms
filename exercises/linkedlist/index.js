// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    this.insertAt(data, 0);
  }
  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }
  getFirst() {
    return this.getAt(0);
  }
  getLast() {
    // if (!this.head) {
    //   return null;
    // }
    // let last = this.head;
    // while(last) {
    //   if (!last.next) {
    //     return last;
    //   }
    //   last = last.next;
    // }
    // return last;
    return this.getAt(this.size() - 1);
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      return null;
    }
    if (this.size() === 1) {
      this.head = null;
      return null;
    }
    let prev = this.head;
    let node = this.head.next;
    while(node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }
  insertLast(data) {
    const last = this.getLast();

    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    let prev = this.getAt(index - 1);
    if (!prev || !prev.next) {
      return;
    }
    prev.next = prev.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    if (this.size() < index) {
      this.getLast().next = new Node(data);
      return;
    }
    let prev = this.getAt(index - 1);
    prev.next = new Node(data, prev.next);
  }
  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }
  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
