//----------------------------------------------------------------------//
// Binary Search Tree
//
// Functions to be implemented:
//  - insert(data) 
//  - remove(data) 
//
// Helper functions:
//  - findMinNode() 
//  - getRootNode() 
//  - inorder(node) 
//  - preorder(node)                
//  - postorder(node) 
//  - search(node, data) 
//----------------------------------------------------------------------//

class Node {

    constructor(value){
        this.value = value;
        this.left  = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor(){
        this.root = null;
    }

    insert(value){

        let newNode = new Node(value);

        if(this.root == null){
            this.root = newNode;
            return;
        }else{
            this.insertNode(this.root, newNode);
        }

    }

    insertNode(node, newNode) {

        // Go left.

        if(node.value > newNode.value){
            if(node.left == null){
                node.left = newNode;
            }else{
                this.insertNode(node.left, newNode);
            }
        }

        // Go right.

        else{
            if(node.right == null){
                node.right = newNode;
            }else{
                this.insertNode(node.right, newNode);
            }
        }
    }
    
    getRootNode(){
        return this.root;
    }

    // Performs inorder traversal of a tree 
    // Left -> Root -> Right
    inorder(node)  
    { 
        if(node !== null) 
        { 
            this.inorder(node.left); 
            console.log(node.value); 
            this.inorder(node.right); 
        } 
    } 

    // Performs pre-order traversal of a tree     
    // Root -> Left -> Right
    preorder(node) 
    { 
        if(node != null) 
        { 
            console.log(node.value); 
            this.preorder(node.left); 
            this.preorder(node.right); 
        } 
    } 

    // Performs post-order traversal of a tree
    // Right -> Root -> Left
    postorder(node) 
    { 
        if(node != null) 
        { 
            this.postorder(node.left); 
            this.postorder(node.right); 
            console.log(node.value); 
        } 
    } 
}

//----------------------------------------------------------------------//

let bst = new BinarySearchTree;

//          15 
//         /  \ 
//        10   25 
//       / \   / \ 
//      7  13 22  27 
//     / \    / 
//    5   9  17  

bst.insert(15); 
bst.insert(25); 
bst.insert(10); 
bst.insert(7); 
bst.insert(22);  
bst.insert(17); 
bst.insert(13); 
bst.insert(5); 
bst.insert(9); 
bst.insert(27); 

//bst.inorder(bst.getRootNode()); // left -> root -> right
//bst.preorder(bst.getRootNode()); // root -> left -> right
bst.postorder(bst.getRootNode()); // right -> root -> left

//----------------------------------------------------------------------//

