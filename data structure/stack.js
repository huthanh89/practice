//----------------------------------------------------------------------//
// Stack (data structure)
// LIFO - Last In First Out
// Functions to be implemented 
    // push(item) 
    // pop() 
    // peek() 
    // isEmpty() 
    // printStack() 
//----------------------------------------------------------------------//

class Stack {

    constructor(){
        this.items = [];
    }

    // Removes item at the end of array.

    pop(){
        return this.items.pop();
    }

    // Add item to end of array.

    push(item){
        this.items.unshift(item);
    }

    print(){
        console.log(this.items);
    }

}

//----------------------------------------------------------------------//

let stack = new Stack();
stack.push('bob');
stack.push('bar');
stack.push('foo');
stack.pop();
stack.print();