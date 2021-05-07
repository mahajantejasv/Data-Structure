class SinglyLinkedList {
  head: SinglyLinkedListNode = null;
  index = 0;
  createSinglyLinkedList(data: any[]) {
    for (let index = 0; index < data.length; index++) {
      this.addNode(data[index]);
    }
  }

  printSinglyLinkedList() {
    //  to print entire model uncomment line mentioned below
    //  console.log(this.head);
    let currentNode = { ...this.head };
    while (currentNode != null) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  addNode(value) {
    if (this.head != null) {
      let currentNode = this.head;
      while (currentNode.next != null) {
        currentNode = currentNode.next;
      }
      currentNode.next = { ...this.getNewNode(value) };
    } else {
      this.head = { ...this.getNewNode(value) };
    }
  }

  getNewNode(value): SinglyLinkedListNode {
    let singlyLinkedListNode = new SinglyLinkedListNode();
    singlyLinkedListNode.value = value;
    singlyLinkedListNode.next = null;
    return singlyLinkedListNode;
  }

  deleteNode(value) {
    if (this.search(this.head, value)) {
      let currnetNode = this.head;
      if (this.head.value === value) this.head = this.head.next;
      else {
        while (currnetNode.next && currnetNode.next.value != value)
          currnetNode = currnetNode.next;
        currnetNode.next = currnetNode.next ? currnetNode.next.next : null;
      }
    }
  }

  calculateLength(node: SinglyLinkedListNode) {
    return node ? 1 + this.calculateLength(node.next) : 0;
  }

  search(node: SinglyLinkedListNode, value): boolean {
    if (node) {
      return node.value != value ? this.search(node.next, value) : true;
    } else {
      return false;
    }
  }

  searchWithIndex(node: SinglyLinkedListNode, nodeIndex, index = 1) {
    if (node)
      return index === nodeIndex
        ? node
        : this.searchWithIndex(node.next, index + 1, nodeIndex);
    else return null;
  }

  deleteLinkedList() {
    if (this.head) {
      while (this.head) {
        if (this.head.next) {
          this.deleteLastNode();
        } else this.head = null;
      }
    }
  }

  deleteLastNode() {
    let currentNode = this.head;
    while (currentNode.next && currentNode.next.next != null)
      currentNode = currentNode.next;
    currentNode.next = null;
  }
  
  getNodeFromLast(node : SinglyLinkedListNode,indexFromLast) {
      if(node){
        if(node.next != null)
        this.getNodeFromLast(node.next,indexFromLast);
        this.index++;
        if(this.index === indexFromLast) 
          console.log(indexFromLast + " element from last node is :::: " ,node);
        
      }
      return;
  }

  getMiddleElement() {
    let currnetNode = this.head;
    let nextNode = this.head;
    if(this.head) {
      while(nextNode && nextNode.next) {
          currnetNode=currnetNode.next;
          nextNode=nextNode.next.next;
      }
      return currnetNode.next.value;
    }
    else return null;
    
  }
}

class SinglyLinkedListNode {
  value: any;
  next: SinglyLinkedListNode;
}

let singlyLinkedListInstance = new SinglyLinkedList();
singlyLinkedListInstance.createSinglyLinkedList([1, 2, 3, 4]);

console.log("Singly Linked List :::: List Has Been Created :::: ");
singlyLinkedListInstance.printSinglyLinkedList();
singlyLinkedListInstance.addNode("New Node Data");
console.log(' ');

console.log("Singly Linked List :::: New Node has Been Created :::: ");
singlyLinkedListInstance.printSinglyLinkedList();
singlyLinkedListInstance.deleteNode(3);
console.log(' ');

console.log("Singly Linked List :::: Node has Been Deleted :::: ");
singlyLinkedListInstance.printSinglyLinkedList();
console.log(' ');

console.log("Singly Linked List :::: Length Calculation :::: ");
console.log(
  singlyLinkedListInstance.calculateLength(singlyLinkedListInstance.head)
);
console.log(' ');

console.log("Singly Linked List :::: Search :::: ");
console.log(
  singlyLinkedListInstance.search(singlyLinkedListInstance.head, 4)
    ? "Found"
    : "Not Found"
);
console.log(' ');

console.log("Singly Linked List :::: Search With Index:::: ");
console.log(
  singlyLinkedListInstance.searchWithIndex(singlyLinkedListInstance.head, 2)
);
console.log(' ');

console.log("Singly Linked List :::: Search With Index:::: ");
console.log(
  singlyLinkedListInstance.searchWithIndex(singlyLinkedListInstance.head, 2)
);
console.log(' ');

console.log("Singly Linked List :::: Get Nth Element From Last :::: ");
singlyLinkedListInstance.getNodeFromLast(singlyLinkedListInstance.head, 2);
singlyLinkedListInstance.index = 0;
console.log(' ');


console.log("Singly Linked List :::: Get Middle Element From Last :::: ");
singlyLinkedListInstance.createSinglyLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(singlyLinkedListInstance.getMiddleElement());
console.log(' ');


console.log("Singly Linked List :::: Delete Linked List:::: ");
singlyLinkedListInstance.deleteLinkedList();
console.log(singlyLinkedListInstance.head ? "Not Empty" : "Empty");
console.log(' ');
