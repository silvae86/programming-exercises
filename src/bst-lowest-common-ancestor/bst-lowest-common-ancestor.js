/**
 * Definition for a binary tree node.
 **/

function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

 function equals(node1, node2)
 {
     if(!node1 && !node2)
     {
         return true;
     }
     if(!node1)
         return false;
     if(!node1)
         return false;

     else return(node1.val === node2.val);
 }

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(!root)
        return null;
    if(equals(p.left, q) || equals(p.right, q ))
    {
        return p;
    }
    else if(equals(q.left, p) || equals(q.right ,p) )
    {
        return q;
    }
    else if(
        equals(root.left, p) &&
        equals(root.right, q)
        ||
        equals(root.left, q) &&
        equals(root.right,p))
    {
        return root;
    }
    else
    {
        let expandLeft = lowestCommonAncestor(root.left, q, p);
        if(expandLeft)
        {
            return expandLeft;
        }
        else
        {
            let expandRight = lowestCommonAncestor(root.right, q, p);
            if(expandRight)
                return expandRight;
            else
                return null;
        }
    }
};

const node0 = new TreeNode(0)
const node1 = new TreeNode(1)
const node2 = new TreeNode(2)
const node3 = new TreeNode(3)
const node4 = new TreeNode(4)
const node5 = new TreeNode(5)
const node6 = new TreeNode(6)
const node7 = new TreeNode(7)
const node8 = new TreeNode(8)

node3.left = node5;
node3.right = node1;

node5.left = node6;
node5.right = node2;

node2.left = node7;
node2.right = node4;

node1.left = node0;
node1.right = node8;

console.log(JSON.stringify(lowestCommonAncestor(node3, node5, node1)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node5, node4)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node7, node4)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node2, node7)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node5, node2)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node1, node0)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node8, node1)));
console.log(JSON.stringify(lowestCommonAncestor(node3, node7, node3)));
