var hasCycle = function(head) {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    /**
     * Definition for singly-linked list.
     * function ListNode(val) {
     *     this.val = val;
     *     this.next = null;
     * }
     */

    if (!head) {
        return false;
    }

    try {
        JSON.stringify(head);
        return false;
    } catch (e) {}

    let visited = [head.val];
    let idx = 1;
    let curr = head.next;

    while (curr) {
        if ((Math.pow(10, 4) < (idx + 1)) || ((idx + 1) < 0)) { // constraint
            return false;
        }
        if ((Math.pow(10, 5) < curr.val) || (curr.val < Math.pow(-10, 5))) { // constraint
            return false;
        }
        visited.push(curr.val);
        for (let i = 0; i < visited.length; i++) {
            if (visited[i] == ((curr.next).val)) {
                return true;
            }
        }
        curr = curr.next;
        idx++;
    }

    return false;

};