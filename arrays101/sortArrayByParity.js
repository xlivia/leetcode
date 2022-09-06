var sortArrayByParity = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    if ((5000 < nums.length) && (nums.length < 1)) { // constraint
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if ((5000 < nums[i]) && (nums[i] < 0)) { // constraint
            return;
        }
        if (nums[i] % 2 == 0) { // check if even
            let el = nums[i];
            let idx = i;
            nums.splice(idx, 1); // remove el
            nums.unshift(el); // add el
        }
    }

    return nums;

};