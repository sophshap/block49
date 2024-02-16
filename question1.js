// Begin by defining a Node class for the individual nodes in the binary tree, each containing a value and pointers for the left and right nodes. Following this, write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence. To test your solution, establish a binary tree containing nodes with integer values [1,2,3,4,5]. Invoke the inorder function to check the output [4,2,5,1,3]. 

// define a Node class
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//   write an inorder function that receives a tree's root node as an argument and prints the node values in an inorder sequence
function inorder(root) {
    if (root !== null) {
        inorder(root.left);
        console.log(root.value);
        inorder(root.right);
    }
}

// create a binary tree with nodes [1, 2, 3, 4, 5]
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// invoke the inorder function to print the values in inorder sequence
inorder(root);
