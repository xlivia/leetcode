var flatten = function(head) {
    /**
     * @param {Node} head
     * @return {Node}
     */
    /**
     * // Definition for a Node.
     * function Node(val,prev,next,child) {
     *    this.val = val;
     *    this.prev = prev;
     *    this.next = next;
     *    this.child = child;
     * };
     */

    let flat = [];
    let curr = head;

    while (head) {

        if (head.child) {

            if (head.next) {
                flat.push(head.next);
            }

            head.next = head.child;
            head.next.prev = head;
            head.child = null;

        }

        else if ((!(head.next)) && (0 < flat.length)) {
            head.next = flat.pop();
            head.next.prev = head;
        }

        head = head.next;

    }

    return curr;

};