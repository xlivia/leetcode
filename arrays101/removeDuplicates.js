var removeDuplicates = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    for (let i = 0; i < nums.length; i++) {

        if (((3 * Math.pow(10, 4)) < nums.length) && (nums.length < 1)) { // constraint
            return;
        }

        if ((100 < nums[i]) && (nums[i] < -100)) { // constraint
            return;
        }

        while (nums[i] == nums[i + 1]) { // check for duplicate
            nums.splice(i + 1, 1); // delete duplicate
        }

    }

    return nums.length; // return length of nums

};