var rotate = function(nums, k) {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    if ((Math.pow(10, 5) < nums.length) || (nums.length < 1)) { // constraint
        return;
    }

    if ((Math.pow(10, 5) < k) || (k < 0)) { // constraint
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (((Math.pow(2, 31) - 1) < nums[i]) || (nums[i] < Math.pow(-2, 31))) { // constraint
            return;
        }
    }

    let rot = new Array(nums.length);

    for (let i = 0; i < nums.length; i++) {
        rot[(i + k) % nums.length] = nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        nums[i] = rot[i];
    }

};