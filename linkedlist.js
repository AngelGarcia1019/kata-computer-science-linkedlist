class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(element) {
    const newNode = new ListNode(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  insertUnique(element) {
    if (this.existElement(element) !== -1) {
      return;
    }
    const newNode = new ListNode(element);
    if (this.isEmpty()) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        count++;
        node = node.next;
      }
      node.next = newNode;
    }
  }

  existElement(element) {
    let node = this.head;
    let index = 0;
    while (node) {
      if (element == node.data) {
        return index;
      }
      node = node.next;
      index++;
    }
    return -1;
  }

  isEmpty() {
    return this.size() == 0;
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  getFirst() {
    return this.head;
  }

  clear() {
    this.head = null;
  }

  print() {
    let node = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }

  elementAt(index) {
    if (index > this.size() || index < 0) return null;
    let node = this.head;
    let count = 0;
    while (node && count != index) {
      node = node.next;
      count++;
    }
    return node;
  }
}

module.exports = LinkedList;
