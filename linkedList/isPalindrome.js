var isPalindrome = function(head) {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    /**
     * Definition for singly-linked list.
     * function ListNode(val, next) {
     *     this.val = (val===undefined ? 0 : val)
     *     this.next = (next===undefined ? null : next)
     * }
     */

    let og = [];
    let rev = [];
    let curr = head;
    let nodes = head.val ? 1 : 0;

    while ((curr.next) && (1 <= nodes <= Math.pow(10, 5)) && (1 <= curr.val <= 9)) {
        og.push(curr.val);
        rev.push(curr.val);
        curr = curr.next;
        nodes++;

    }

    og.push(curr.val);
    rev.push(curr.val);

    let revStr = rev.reverse().join('');
    let ogStr = og.join('');

    if (ogStr === revStr) {
        return true;
    }
    else {
        return false;
    }

};