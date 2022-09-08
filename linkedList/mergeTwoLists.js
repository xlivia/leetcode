var mergeTwoLists = function(list1, list2) {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    /**
    * Definition for singly-linked list.
    * function ListNode(val, next) {
    *     this.val = (val===undefined ? 0 : val)
    *     this.next = (next===undefined ? null : next)
    * }
    */

    let nodes1 = 0;
    let nodes2 = 0;

    let merged = new ListNode();
    let prev = merged;

    while ((list1) && (list2) && (0 <= nodes1 <= 50) && (-100 <= list1.val <= 100) && (0 <= nodes2 <= 50) && (-100 <= list2.val <= 100)) {

        if (list1.val < list2.val) {
            merged.next = list1;
            list1 = list1.next;
        }
        else {
            merged.next = list2;
            list2 = list2.next;
        }

        merged = merged.next;
        nodes1++;
        nodes2++;

    }

    merged.next = list1 ? list1 : list2;

    return prev.next;

};