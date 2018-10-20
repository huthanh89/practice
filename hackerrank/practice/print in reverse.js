/*

The first linked list has  elements: 16 -> 12 -> 4 -> 2 -> 5. Printing this in reverse order will produce: 5 -> 2 -> 4 -> 12 -> 16. 
The second linked list has  elements: 7 -> 3 -> 9. Printing this in reverse order will produce: 9 -> 3 -> 7. 
The third linked list has  elements: 5 -> 1 -> 18 -> 3 -> 13. Printing this in reverse order will produce: 13 -> 3 -> 18 -> 1 -> 5.

 */

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }

    insertNodeToHead(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);


        if (this.head == null) {
            this.head = node;
        } 
        else{
            let temp = this.head;
            node.next = temp;
            temp.next = this.head.next;
            this.head = node;
        }

    }
};

function reversePrint(head) {

    console.log('>>>', head.data);

    if(head.next == null){
        console.log(head.data)
        return;
    }
    else{
        reversePrint(head.next);
    }

    console.log(head.data)

}


let list = new SinglyLinkedList();

list.insertNode(1);
list.insertNode(2);
list.insertNode(3);

reversePrint(list.head);