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
    let prev = null;
    let curr = head;

    if ((50 < val) || (val < 0)) { // constraint
        return;
    }

    /*
    while ((head) && (nodes <= Math.pow(10, 4)) && (0 <= nodes)) {
        if ((50 < head.val) || (head.val < 1)) { // constraint
            return;
        }
        if ((val == head.val) && (prev === null) && (head.next === null)) {
            // remove head length 1
            console.log('remove head length = 1');
            head = null;
            return head;
        }
        else if ((val == head.val) && (prev === null) && (head.next !== null)) {
            // remove head length > 1
            console.log('remove head length > 1');
            head = head.next;
            prev = null;
        }
        else if ((val == head.val) && (prev !== null) && (head.next !== null)) {
            // remove from middle
            console.log('remove from middle');
            prev.next = head.next;
        }
        else if ((val == head.val) && (prev !== null) && (head.next === null)) {
            // remove from end
            console.log('remove from end');
            prev.next = null;
        }
        else {
            console.log('no conditions');
        }
        prev = head;
        head = head.next;
        nodes++;
        console.log(head); // debug
        console.log(prev); // debug
        console.log('end loop'); // debug
    }
    */

    while ((curr.next) && (nodes <= Math.pow(10, 4)) && (0 <= nodes)) {

        if ((50 < curr.val) || (curr.val < 1)) { // constraint
            return;
        }
        /*
        if ((val == curr.val) && (prev === null) && (curr.next === null)) {
            // head length 1
            console.log('head length = 1');
            head = null;
            curr = head;
        }
        else if ((val == curr.val) && (prev === null) && (curr.next !== null)) {
            // head length > 1
            console.log('head length > 1');
            head = curr.next;
            prev = null;
            curr = head;
            console.log(head); // debug
            console.log(curr); // debug
            console.log(prev); // debug
            console.log('end loop'); // debug
            continue;
        }
        else if ((val == curr.val) && (prev !== null) && (curr.next !== null)) {
            // remove from middle
            console.log('remove from middle');
            prev.next = curr.next;
        }
        else if ((val == curr.val) && (prev !== null) && (curr.next === null)) {
            // remove from end
            console.log('remove from end');
            prev.next = null;
        }
        else {
            console.log('no conditions');
        }
        /*/
        if ((val == curr.val) && (nodes === 0)) {
            if (curr.next === null) {
                console.log('head null'); // debug
                head.next = null;
                //head = null;
            }
            else {
                console.log('head not null'); // debug
                head.next = (curr.next).next;
                //head = curr.next;
            }
        }
        else if ((val == curr.val) && (curr.next !== null)) {
            console.log('not head not null'); // debug
            prev.next = curr.next;
        }
        else if ((val == curr.val) && (curr.next === null)) {
            console.log('not head null'); // debug
            curr.next = null;
            curr = null;
        }

        prev = curr;
        curr = curr.next;
        nodes++;

        console.log(head); // debug
        console.log(curr); // debug
        console.log(prev); // debug
        console.log('end loop'); // debug

    }

    return head;

};