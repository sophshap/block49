// Find the leftmost value in the last row of a binary tree with distinct node values. Use the TreeNode class, which defines a node's structure. Implement the 'searchBottomLeftValue(root)' function, taking the root of the binary tree as input. This function should return the value of the leftmost node in the last row of the tree. Test your function by using a binary tree with nodes [2,1,3,4,5,6] as input. The 'searchBottomLeftValue(root)' function should then return an output of 6.

function searchBottomLeftValue(root) {
    const currentLevel = 0;
    const result = { level: currentLevel, value: root.value };
    function bottomLeftValue(node, level, result) {
        if (!node) return;
        if (level > result.level) {
            result.level = level;
            result.value = node.value;
        }
        bottomLeftValue(node.left, level + 1, result);
        bottomLeftValue(node.right, level + 1, result);
    }
    bottomLeftValue(root, 0, result);
    return result.value;
}

const root2 = new TreeNode(2);
root2.left = new TreeNode(1);
root2.right = new TreeNode(3);
root2.left.left = new TreeNode(4);
root2.right.left = new TreeNode(5);
root2.right.left.left = new TreeNode(6);

console.log(searchBottomLeftValue(root2))