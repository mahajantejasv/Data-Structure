class SinglyLinkedList {
  head: SinglyLinkedListNode = null;
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
    // if (this.head) {
    //   let currentNode = this.head;
    //   if (currentNode.value === value) this.head = this.head.next;
    //   else {
    //     if(currentNode.next) {
    //       while (currentNode.next.value != value) {
    //         currentNode = currentNode.next;
    //       }
    //       currentNode.next = currentNode.next.next;
    //     }
    //   }
    // }
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
console.log("Singly Linked List :::: New Node has Been Created :::: ");
singlyLinkedListInstance.printSinglyLinkedList();
singlyLinkedListInstance.deleteNode(3);
console.log("Singly Linked List :::: Node has Been Deleted :::: ");
singlyLinkedListInstance.printSinglyLinkedList();
console.log("Singly Linked List :::: Length Calculation :::: ");
console.log(
  singlyLinkedListInstance.calculateLength(singlyLinkedListInstance.head)
);
console.log("Singly Linked List :::: Search :::: ");
console.log(
  singlyLinkedListInstance.search(singlyLinkedListInstance.head, 4)
    ? "Found"
    : "Not Found"
);
