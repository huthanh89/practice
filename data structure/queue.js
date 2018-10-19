//----------------------------------------------------------------------//
// Queue (data structure)
//
// FIFO - Last In First Out
//----------------------------------------------------------------------//

class Queue {

    constructor(){
        this.items = [];
    }

    // Add item to end of array.

    enQueue(item){
        this.items.push(item);
    }

    // Remove item from start of array.

    deQueue(){
        return this.items.shift();
    }

    printQueue(){
        console.log(this.items);
    }

}

//----------------------------------------------------------------------//

let queue = new Queue();
queue.enQueue('bob');
queue.enQueue('bar');
queue.enQueue('foo');

queue.printQueue();

console.log(queue.dequeue());