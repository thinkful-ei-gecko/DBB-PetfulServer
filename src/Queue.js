class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(value) {
    const node = new _Node(value);
    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(queue) {
  let first = queue.first;
  return first;
}

function getUserPlaceInLine(user){
  let currentPosition = this.first;
  let count = 0;
  while (currentPosition !== user) {
    count ++;
    if (currentPosition.value === user) {
      return count;
    }
    currentPosition = currentPosition.next;
  }
  return 0;
}

function makeArrayFromQueue(list) {
  let result = [];
  let currNode = list.first;
  while (currNode !== null) {
    result.push(currNode.value)
    currNode = currNode.next;
  }
  return result;
}

function isEmpty(queue) {
  let first = queue.first;
  if (first === null) {
    return true;
  }
  return false;
}

function display(queue) {
  let displayQueue = queue;
  return JSON.stringify(displayQueue)
}

module.exports = {
  Queue,
  _Node,
  display,
  isEmpty,
  peek,
  getUserPlaceInLine,
  makeArrayFromQueue,
};
