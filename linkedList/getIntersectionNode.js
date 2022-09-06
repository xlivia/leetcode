var getIntersectionNode = function(headA, headB) {
    /**
     * @param {ListNode} headA
     * @param {ListNode} headB
     * @return {ListNode}
     */
    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */

    let currA = headA;
    let currB = headB;
    let currVals = new Set();

    while (currA) {
        currVals.add(currA);
        currA = currA.next;
    }

    while (currB) {
        if (currVals.has(currB)) {
            return currB;
        }
        currB = currB.next;
    }

    return null;

};