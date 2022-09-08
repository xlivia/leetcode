var removeElements = function(head, val) {
    /**
     * @param {ListNode} head
     * @param {number} val
     * @return {ListNode}
     */
    /**
    * Definition for singly-linked list.
    * function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
    */

    let nodes = 0;
    let curr = new ListNode(val, head);
    let prev = curr;

    if ((50 < val) || (val < 0)) { // constraint
        return;
    }

    while ((head) && (nodes <= Math.pow(10, 4)) && (0 <= nodes)) {

        if ((50 < head.val) || (head.val < 1)) { // constraint
            return;
        }

        if (head.val != val) {
            prev.next = head;
            prev = prev.next;
        }

        head = head.next;
        nodes++;

    }

    prev.next = null;

    return curr.next;

};