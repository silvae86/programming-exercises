/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

class Node {
    value;
    left = null;
    right = null;
    count = 0;
}

let findNode = function(node, value)
{
    if(node === null)
    {
        return null;
    }
    else if(node.value === value)
    {
        return node;
    }
    else
    {
        if(node.value < value)
            return findNode(node.right);
        else if(node.value > value)
            return findNode(node.left);
    }
}

let insertNode = function(node, value)
{
    const newNode = {value: value, count: 0}
    if(node.value === value)
    {
        node.count++;
    }
    else if(!node.right && !node.left)
    {
        if(value > node.value)
        {
            node.right = newNode;
        }
        else
        {
            node.left = newNode;
        }
    }
    else if(node.left)
    {
        if(value > node.left.value)
        {
            newNode.left = node.left;
            node.left = newNode;
        }
        else if (value <= node.left.value)
        {
            insertNode(node.left);
        }
    }
    else if(node.right)
    {
        if(value < node.right.value)
        {
            newNode.right = node.right;
            node.right = newNode;
        }
        else if (value >= node.right.value)
        {
            insertNode(node.right);
        }
    }
}

var getSmallest = function()

var tree = new Node();

var wiggleSort = function(nums) {
    for(let i = 0; i < nums.length; i++)
    {
        insertNode(tree, nums[i]);
    }

    let currentNumber = getSmallest(tree);
    let wiggleSorted = [];
    while(wiggleSorted.length < nums.length)
    {
        const down = getFirstSmallestThan(tree, currentNumber);
        const up = getFirstLargerThan(tree, down);
        if(down)
        {
            wiggleSorted = wiggleSorted.concat([down.value])
        }
        if(up)
        {
            wiggleSorted = wiggleSorted.concat([up.value])
        }
    }

    nums = wiggleSorted;
};
