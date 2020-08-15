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

 var search = function(node, parent, p, q, paths)
 {
     if(node)
     {
         if(!paths[node.val])
         {
             if(parent === null)
             {
                 paths[node.val] = [node.val];
             }
             else
             {
                 paths[node.val] = [node.val].concat(paths[parent.val]);
             }
         }

         if(node.left)
             search(node.left, node, p, q, paths);
         if(node.right)
             search(node.right, node, p, q, paths);
         else
             if(parent)
                paths[node.val] = [node.val].concat(paths[parent.val]);
     }
 };

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let paths = {};
    search(root, null, p, q, paths);
    const pathQ = paths[q.val];
    const pathP = paths[p.val];

    const pathsConcat = pathQ.concat(pathP);
    const valsSeen = {};

    for (let i = 0; i < pathsConcat.length; i++) {
        let val = pathsConcat[i];
        if(valsSeen[val])
            return val;
        else
            valsSeen[val] = true;
    }
};

const node0 = new TreeNode(0);
const node1 = new TreeNode(1);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
const node6 = new TreeNode(6);
const node7 = new TreeNode(7);
const node8 = new TreeNode(8);

node3.left = node5;
node3.right = node1;

node5.left = node6;
node5.right = node2;

node2.left = node7;
node2.right = node4;

node1.left = node0;
node1.right = node8;

console.log("Common ancestor of 5, 1");
console.log(JSON.stringify(lowestCommonAncestor(node3, node5, node1)));

console.log("Common ancestor of 5, 4");
console.log(JSON.stringify(lowestCommonAncestor(node3, node5, node4)));

console.log("Common ancestor of 7, 4");
console.log(JSON.stringify(lowestCommonAncestor(node3, node7, node4)));

console.log("Common ancestor of 2, 4");
console.log(JSON.stringify(lowestCommonAncestor(node3, node2, node7)));

console.log("Common ancestor of 1, 0");
console.log(JSON.stringify(lowestCommonAncestor(node3, node1, node0)));

console.log("Common ancestor of 8, 1");
console.log(JSON.stringify(lowestCommonAncestor(node3, node8, node1)));

console.log("Common ancestor of 7, 3");
console.log(JSON.stringify(lowestCommonAncestor(node3, node7, node3)));

console.log("Common ancestor of 7, 0");
console.log(JSON.stringify(lowestCommonAncestor(node3, node7, node0)));

console.log("Common ancestor of 7, 8");
console.log(JSON.stringify(lowestCommonAncestor(node3, node7, node8)));
