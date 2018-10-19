//----------------------------------------------------------------------//
// Doubly Linked List
//
// Interface:
//  - getFirst() -> return head
//  - getLast()  -> return tail
//  - removeFirst() 
//  - removeLast() 
//  - addFirst(data) 
//  - addLast(data) 
//  - size() 
//  - clear() 
//
// Helper functions:
//----------------------------------------------------------------------//

class Node{
    constructor(data){
        this.data = data;
        this.next = null; // node level pointer
        this.prev = null; // node level pointer
    }
}

class LinkedList {
    
    constructor(){
        this.head = null; // top level pointer
        this.tail = null; // top level pointer
    }

    getFirst(){
        return this.head;
    }

    getLast(){
        return this.tail;
    }

    addFirst(data){
        let firstNode = new Node(data);
        if(this.head==null){
            this.head = firstNode;
            this.tail = firstNode;
        }
        else{
            
            let secondNode  = this.head;
            firstNode.next  = secondNode;
            secondNode.prev = firstNode;
            this.head       = firstNode;
        }
    }

    addLast(data){
        let newNode = new Node(data);
        if(this.head==null){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    removeFirst(){
        this.head = this.head.next;
        this.head.prev = null;
    }

    removeLast(){
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    clear(){
        this.head = null;
        this.tail = null;
    }
    
    size(){
        var count = 0;
        function traverse(node){
            count = count+ 1;
            if(node.next==null){
                return;
            }
            else{
                traverse(node.next);
            }
        }
        traverse(this.head);
        return count;
    }

    print(){
        function traverse(node){
            console.log(node);
            if(node.next==null){
                return;
            }
            else{
                traverse(node.next);
            }
        }
        traverse(this.head);
    }

}
//----------------------------------------------------------------------//

var linkedList = new LinkedList();

linkedList.addFirst('one');
linkedList.addFirst('two');
linkedList.addFirst('three');
linkedList.addFirst('four');
linkedList.addFirst('five');

//linkedList.removeFirst();
//linkedList.removeLast();
//console.log(linkedList.getLast());
//linkedList.getLast();
//console.log(linkedList.getFirst());
//console.log(linkedList.getLast());
//linkedList.print();


console.log(linkedList.size());

//----------------------------------------------------------------------//