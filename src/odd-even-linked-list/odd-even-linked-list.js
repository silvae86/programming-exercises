/**
 * Definition for singly-linked list.
 **/

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    this.print = function()
    {
        let node = this;
        while (node)
        {
            console.log(node.val);
            node = node.next;
        }
    }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) {
        return null;
    }

    let odd = head;
    let even = head.next;
    let evenHead = head.next;

    while(odd.next != null && even.next != null)
    {
        odd.next = even.next;
        odd = even.next;
        even.next = odd.next;
        even = odd.next;
    }

    odd.next = evenHead;
    return head;
};

var node8 = new ListNode(8,undefined);
var node7 = new ListNode(7,node8);
var node6 = new ListNode(6,node7);
var node5 = new ListNode(5,node6);
var node4 = new ListNode(4,node5);
var node3 = new ListNode(3,node4);
var node2 = new ListNode(2,node3);
var node1 = new ListNode(1,node2);
oddEvenList(node1);
node1.print();


