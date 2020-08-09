/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

class Node {
    constructor(value, left, right, count = 1)
    {
        this.value = value;
        this.left = left;
        this.right = right;
        this.count = count;
    }
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
    const newNode = {value: value, count: 1};
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
            insertNode(node.left, value);
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
            insertNode(node.right, value);
        }
    }
}

var getSmallest = function(node)
{
    if(node.left && node.left.count > 0)
    {
        return getSmallest(node.left)
    }
    else
    {
        return node;
    }
};

var getLargest = function(node)
{
    if(node.right && node.right.count > 0)
    {
        return getLargest(node.right)
    }
    else
    {
        return node;
    }
};

var wiggleSort = function(nums) {

    var tree = new Node(nums[0]);

    for(let i = 1; i < nums.length; i++)
    {
        const num = nums[i];
        insertNode(tree,num);
    }

    let wiggleSorted = [];
    let lower = [];
    let smallest = getSmallest(node);
    let higher = [];
    let largest = getLargest(node);

    while(smallest != null)
    {
        smallest = getSmallest(node);
        lower.concat([smallest]);
    }

    while(largest != null)
    {
        largest = getLargest(node);
        higher.concat([largest]);
    }

    nums = wiggleSorted;
    console.log(nums);
};

console.log(wiggleSort([6,3,6,3,6]));
console.log(wiggleSort([1, 5, 1, 1, 6, 4]));
console.log(wiggleSort([6,6,6,6,3,3,3,3]));
console.log(wiggleSort([2, 3, 1, 3, 1, 2]));
