
// Definition for singly-linked list.
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next);
     this.stats = function()
     {
         let i = 0;
         let head = this;

         while(head)
         {
             head = head.next;
             i++;
         }

         return { length: i, last: head };
     }
    this.print = function length()
    {
        let i = 0;
        let head = this;
        let string = "["

        while(head.next)
        {
            string = string + head.val;
            head = head.next;
            if(head.next)
                string = string + ",";
            i++;
        }

        string = string + "]";
        console.log(string);
    }
 }

var node8 = new ListNode(1,undefined);
var node7 = new ListNode(2,node8);
var node6 = new ListNode(3,node7);
var node5 = new ListNode(4,node6);
var node4 = new ListNode(4,node5);
var node3 = new ListNode(3,node4);
var node2 = new ListNode(2,node3);
var nodepalindrome = new ListNode(1,node2);

var nodenp8 = new ListNode(8,undefined);
var nodenp7 = new ListNode(7,nodenp8);
var nodenp6 = new ListNode(6,nodenp7);
var nodenp5 = new ListNode(5,nodenp6);
var nodenp4 = new ListNode(4,nodenp5);
var nodenp3 = new ListNode(3,nodenp4);
var nodenp2 = new ListNode(2,nodenp3);
var nodeNonPalindrome = new ListNode(1,nodenp2);

var splitAndReverseFirstHalf = function(head)
{
    let length = head.stats().length;
    let cutPos;

    if(length % 2 === 0)
        cutPos = length / 2;
    else
        cutPos = Math.floor(length / 2) - 1;

    let counter = 0;

    let prev = null;
    let next = null;
    let curr = head;

    while(curr && counter < cutPos)
    {
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        counter++;
    }

    const secondHalf = curr;
    const firstHalf = prev;

    return {first: firstHalf, second: secondHalf};
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    const halves = splitAndReverseFirstHalf(head);
    while(halves.first && halves.second)
    {
        if(halves.first.val !== halves.second.val)
        {
            return false;
        }
        else
        {
            halves.first = halves.first.next;
            halves.second = halves.second.next;
        }
    }
    return true;
};

isPalindrome(nodeNonPalindrome)
isPalindrome(nodepalindrome)
