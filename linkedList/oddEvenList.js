var oddEvenList = function(head) {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */

    let oddNodes = new ListNode(-1);
    let evenNodes = new ListNode(-1);

    let odd = oddNodes;
    let even = evenNodes;

    let nodes = 0;
    let curr = head;

    while ((curr) && (Math.pow(-10, 6) < curr.val <= Math.pow(10, 6)) && (0 <= nodes <= Math.pow(10, 4))) {

        nodes++;

        if ((nodes % 2) == 1) {
            odd.next = curr;
            odd = odd.next;
        }
        else {
            even.next = curr;
            even = even.next;
        }

        curr = curr.next;

    }

    even.next = null;
    odd.next = evenNodes.next;

    return oddNodes.next;

};