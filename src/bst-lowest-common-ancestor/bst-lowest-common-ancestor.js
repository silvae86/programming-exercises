/**
 * Definition for a binary tree node.
 **/

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(p.left === q || p.right === q )
    {
        return p;
    }
    else if(q.left === p || q.right === p )
    {
        return q;
    }
    else if(root.left === p && root.right === q || root.left === q && root.right === p)
    {
        return root;
    }
    else
    {
        if(root.left)
            return lowestCommonAncestor(root.left, q, p);
        if(root.right)
            return lowestCommonAncestor(root.right, q, p);
    }
};

const node6 = new TreeNode(6)
const node2 = new TreeNode(2)
const node0 = new TreeNode(0)
const node4 = new TreeNode(4)
const node3 = new TreeNode(3)
const node5 = new TreeNode(5)
const node8 = new TreeNode(8)
const node7 = new TreeNode(7)
const node9 = new TreeNode(9)

node4.left = node3;
node4.right = node5;

node8.left = node7;
node8.right = node9;

node1.left = node0;
node1.right = node4;

node6.left = node2;
node6.right = node8;

lowestCommonAncestor(node6, 2, 8);
