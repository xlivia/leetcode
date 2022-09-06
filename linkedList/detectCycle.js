var detectCycle = function(head) {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */

    try {
        JSON.stringify(head);
        return null;
    } catch (e) {}

    if ((head === null) || (head.next === null)) {
        return null;
    }

    let slow = head;
    let fast = head;
    slow = slow.next;
    fast = fast.next.next;

    while ((fast !== null) && (fast.next !== null)) {
        if (slow == fast) {
            break;
        }
        slow = slow.next;
        fast = fast.next.next;
    }

    if (slow != fast) { // If loop does not exist
        return null;
    }

    slow = head;

    while (slow != fast) { // If loop exists
        slow = slow.next; // Start slow from head
        fast = fast.next; // Start fast from meeting point
    }

    return slow;

};