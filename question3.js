// Develop a 'countNodes' function to calculate the total nodes in a binary tree, and build a TreeNode class for a binary tree in JavaScript. For complete trees, it uses the formula 2^h - 1. Verify the function using a given root tree. For a binary tree input with nodes [10,11,12,13,14,15,16], the 'countNodes' function should yield an output of 7.

class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function countNodes(root) {
    if (!root) return 0;

    let leftDepth = 0;
    let rightDepth = 0;
    let leftNode = root;
    let rightNode = root;

    // calculate the depth of the leftmost and rightmost paths
    while (leftNode) {
        leftDepth++;
        leftNode = leftNode.left;
    }
    while (rightNode) {
        rightDepth++;
        rightNode = rightNode.right;
    }

    // if the depths are the same, it's a complete tree
    if (leftDepth === rightDepth) {
        return Math.pow(2, leftDepth) - 1;
    }

    // if not, recursively count the nodes
    return 1 + countNodes(root.left) + countNodes(root.right);
}

// creating the binary tree from the given nodes [10,11,12,13,14,15,16]
const root = new TreeNode(10);
root.left = new TreeNode(11);
root.right = new TreeNode(12);
root.left.left = new TreeNode(13);
root.left.right = new TreeNode(14);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(16);

// verifying the function using the given root tree
console.log(countNodes(root)); // Output: 7