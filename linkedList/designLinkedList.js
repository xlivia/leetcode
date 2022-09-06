var MyLinkedList = function() {
    this.val = null;
    this.next = null;
};

MyLinkedList.prototype.get = function(index) {
    /**
     * Get the value of the index-th node in the linked list.
     * If the index is invalid, return -1.
     * @param {number} index
     * @return {number}
     */
    if (index < 0) { // constraint
        return -1;
    }
    if ((this.val === null) && (this.next === null)) {
        return -1;
    }
    let idx = 0;
    let curr = this;
    while (curr) {
        if (idx == index) {
            return curr.val;
        }
        curr = curr.next;
        idx++;
    }
    return -1;
};

MyLinkedList.prototype.addAtHead = function(val) {
    /**
     * Add a node of value val before the first element of the linked list.
     * After the insertion, the new node will be the first node of the linked list.
     * @param {number} val
     * @return {void}
     */
    if (1000 < val) { // constraint
        return;
    }
    if ((this.val === null) && (this.next === null)) {
        this.val = val;
        return;
    }
    var newNode = {
        val: val,
        next: this.next
    };
    this.next = newNode;
    let tempval = this.val;
    this.val = newNode.val;
    (this.next).val = tempval;
};

MyLinkedList.prototype.addAtTail = function(val) {
    /**
     * Append a node of value val as the last element of the linked list.
     * @param {number} val
     * @return {void}
     */
    if (1000 < val) { // constraint
        return;
    }
    if ((this.val === null) && (this.next === null)) {
        this.val = val;
        return;
    }
    var newNode = {
        val: val,
        next: null
    };
    if (this.next === null) {
        this.next = newNode;
        return;
    }
    let current = this.next;
    while (current.next) {
        current = current.next;
    }
    current.next = newNode;
};

MyLinkedList.prototype.addAtIndex = function(index, val) {
    /**
     * Add a node of value val before the index-th node in the linked list.
     * If index equals the length of the linked list, the node will be appended to the end of the linked list.
     * If index is greater than the length, the node will not be inserted.
     * @param {number} index 
     * @param {number} val
     * @return {void}
     */
    if ((1000 < val) || (index < 0)) { // constraint
        return;
    }
    if ((this.val === null) && (this.next === null) && (index > 0)) {
        return;
    }
    let prev = null;
    let curr = this;
    let idx = 0;
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    while (curr !== null) {
        if (idx == index) {
            var newNode = {
                val: val,
                next: null
            };
            newNode.next = curr;
            prev.next = newNode;
            return;
        }
        prev = curr;
        curr = curr.next;
        idx++;
    }
    if (idx == index) {
        this.addAtTail(val);
    }
};

MyLinkedList.prototype.deleteAtIndex = function(index) {
    /**
     * Delete the index-th node in the linked list, if the index is valid.
     * @param {number} index
     * @return {void}
     */
    if (index < 0) { // constraint
        return;
    }
    let prev = null;
    let curr = this;
    let idx = 0;
    if (index === 0) {
        while (curr.next) {
            this.val = (curr.next).val;
            if ((curr.next).next === null) {
            this.next = null;
            }
            else {
                this.next = (curr.next).next;
            }
            return;
        }
        this.val = null;
        this.next = null;
        return;
    }
    while (curr) {
        if (idx == index) {
            prev.next = curr.next;
            return;
        }
        prev = curr;
        curr = curr.next;
        idx++;
    }
};