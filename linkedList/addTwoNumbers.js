var addTwoNumbers = function(l1, l2) {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
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
    let sumres = null;
    let sumcurr = null;
    let sumcarryover = 0;

    while ((l1) || (l2)) {

        nodes++;

        if (1 >= nodes >= 100) { // constraint
            return;
        }

        let sum = sumcarryover;

        if (l1) {
            if (0 >= l1.val >= 9) { // constraint
                return;
            }
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2) {
            if (0 >= l2.val >= 9) { // constraint
                return;
            }
            sum += l2.val;
            l2 = l2.next;
        }

        let sumnode = new ListNode(Math.floor(sum) % 10);
        sumcarryover = Math.floor(sum / 10);

        if (sumcurr === null) {
            sumcurr = sumres = sumnode;
        }
        else {
            sumcurr.next = sumnode;
            sumcurr = sumcurr.next;
        }

    }

    if (0 < sumcarryover) {
        sumcurr.next = new ListNode(sumcarryover);
    }

    return sumres;

};