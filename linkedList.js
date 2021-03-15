//need to create the node class

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    //this.head === null means list is empty
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next
      }
      tempNode.next = new _Node(item, null)
    }
  }

  find(item) {
    //stat at the head
    let currNode = this.head;
    //if the list is empty
    if (!this.head) {
      return null;
    }

    //check for the item
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }

    //found it
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    //if node being removed at head make next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    //start at the head
    let currNode = this.head;
    //keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode == null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }

  makeCyclical(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, this.head)
    }
  }

  insertBefore(item, key) {
    let currNode = this.head;
    let prevNode = this.head;

    if (this.head.value === key) {
      this.insertFirst(item);
    } else {
      while((currNode !== null) && (currNode.value !== key)) {
        prevNode = currNode
        currNode = currNode.next
      }
    }
    currNode.next = new _Node(item, prevNode.next.next)
  }

  insertAt(item,  position) {
    let currNode = this.head
    let prevNode = this.head
    let counter = 0

    while((currNode !== null) && (counter !== (position))) {
      prevNode = currNode
      currNode = currNode.next
      counter++
    }
    prevNode.next = new _Node(item, currNode.next)
    return currNode
  }
}//end 

//best case is O(1)
//average or worst are O(n) due to finding the node that you want to remove

class _NodeDLL {
  constructor() {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

insertFirst(item) {
  this.head = new _NodeDLL(item, null, this.tail);
  this.tail = this.head
}

insertLast(item) {
  if (this.head === null) {
    this.insertFirst(item)
  }
  else {
    this.tail.next = new _NodeDLL(item, null, this.tail);
    this.tail = this.tail.next
  }
}

insertBefore(item, key) {
  let currNode = this.head;
  let prevNode = this.head;

  if (this.head.value === key) {
    this.insertFirst(item);
  } else {
    while((currNode !== null) && (currNode.value !== key)) {
      prevNode = currNode
      currNode = currNode.next
    }
  }
  currNode.next = new _NodeDLL(item, prevNode.next.next, prevNode.next);
  if(this.tail === currNode) {
    this.tail = currNode.next
  }
}


