var reverseList = function(head) {
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

    let prev = null;
    let nextNode = null;
    let curr = head;
    let nodes = 0;

    while (curr) {
        if ((5000 < curr.val) || (curr.val < -5000)) { // constraint
            return;
        }
        curr = curr.next;
        nodes++;
    }

    if ((5000 < nodes) || (nodes < 0)) { // constraint
        return;
    }

    curr = head;
    while (curr) {
        nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    head = prev;

    return head;

};