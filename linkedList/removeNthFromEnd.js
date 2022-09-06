var removeNthFromEnd = function(head, n) {
    /**
     * @param {ListNode} head
     * @param {number} n
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
    let curr = head;
    let len = 0;
    let nidx = 0;
    let idx = 0;

    while (curr) {
        if ((100 < curr.val) || (curr.val < 0)) { // constraint
            return;
        }
        len++;
        curr = curr.next;
    }

    if ((30 < len) || (len < 1)) { // constraint
        return;
    }
    if ((len < n) || (n < 1)) { // constraint
        return;
    }

    if ((len == 1) && (n == 1)) {
        head = null;
        return head;
    }

    nidx = len - n;
    curr = head;

    while (curr) {
        if (nidx === 0) {
            head = curr.next;
            break;
        }
        else if (nidx == idx) {
            prev.next = curr.next;
            break;
        }
        prev = curr;
        curr = curr.next;
        idx++;
    }

    return head;

};