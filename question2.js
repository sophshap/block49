// Create a Node class in JavaScript to build parts of a binary tree. Then, make an 'isSameTree' function. This function checks two binary trees and tells if they are the same or not. Test your function by making two binary trees and comparing them. For an input binary tree with nodes [1,2,3], 'isSameTree' should return 'true' for the same output [1,2,3] and 'false' otherwise.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
function isSameTree(a, b) {
    if (!a && !b) {
        return true;
    }
    if (!a || !b || a.data !== b.data) {
        return false;
    }
    // recursively check left and right subtrees
    return isSameTree(a.left, b.left) && isSameTree(a.right, b.right);
}
let root1 = null;
root1 = new Node(1);
root1.left = new Node(2);
root1.right = new Node(3);
// root1.left.left = new Node(5)
let root2 = null;
root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);
let root3 = null;
root3 = new Node(1);
root3.left = new Node(3);
root3.right = new Node(5)
console.log(isSameTree(root1, root2));
console.log(isSameTree(root1, root3));