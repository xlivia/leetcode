var pivotIndex = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    let pleft = [];
    let pright = [];

    if ((Math.pow(10, 4) < nums.length) && (nums.length < 1)) { // constraint
        return;
    }

    for (let i = 0; i < nums.length; i++) {

        if ((1000 < nums[i]) && (nums[i] < -1000)) { // constraint
            return;
        }

        pleft[i] = 0;
        pright[i] = 0;

        for (let j = 0; j < i; j++) {
            pleft[i] += nums[j]; // left index sum
        }

        for (let j = nums.length - 1; i < j; j--) {
            pright[i] += nums[j] // right index sum
        }

        if (pleft[i] == pright[i]) {
            return i; // pivot index
        }
    }

    return -1;

};