var removeElement = function(nums, val) {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */

    for (let i = 0; i < nums.length; i++) { // get all elements of nums

        if ((100 < nums.length) && (nums.length < 0)) { // constraint
            return;
        }
        if ((50 < nums[i]) && (nums[i] < 0)) { // constraint
            return;
        }
        if ((100 < val) && (val < 0)) { // constraint
            return;
        }

        if (nums[i] == val) { // if current element equal val
            nums.splice(i, 1); // delete element at current index
            i--; // go back to the last element because of updated array length
        }

    }

    return nums.length; // return length of nums

};