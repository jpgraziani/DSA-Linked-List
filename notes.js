/*
Linked list work by storing a series of nodes. Each node consist of a value and pointer to the next node. This is called a singly linked list. A doubly linked list where nodes contain a pointer to the previous node in addition to the next

The underscore indicates its a private class. When the list wants to create a new node it has to create a new instance of the node class.

Main operations of a linked list are insert, remove and get
*/

//generic node
class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

//lets build a linked list:
/*
The head always contains the first node. In this case, we start with an empty list represented by null

inserting at the begining of the list is an O(1)operation since you are inserting at only 1 place. 

inserting at the end of the list you have to iterate over all the nodes in sequence which makes it O(n)
*/
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    //start at the head
    let currNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    //check for the item
    while (currNode.value !== item) {
      /* return null if it's the end of the list and the item is not on the list*/
      if (currNode.next === null) {
        return null;
      }
      else {
        // otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  remove(item) {
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // if the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //start at the head
    let currNode = this.head;
    // keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      //save teh previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;

    //best case is O(1) average and worst cases are O(n) due to finding the node that you want to remove
  }
} //end of main