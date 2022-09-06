var dominantIndex = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    let m = Math.max(...nums); // value largest element in nums
    let maxIdx = nums.indexOf(m); // index of largest element in nums
    let count = 0;

    if ((50 < nums.length) && (nums.length < 2)) { // constraint
        return;
    }

    for (let i = 0; i < nums.length; i++) {

        if ((100 < nums[i]) && (nums[i] < 0)) { // constraint
            return;
        }

        if ((m == nums[i]) && (maxIdx != i)) { // constraint
            return;
        }

        if (maxIdx == i) {
            i++;
        }

        if ((nums[i] * 2) <= m) { // check if double of current is less than the max
            count++; // keep track of doubles less than the max
        }

    }

    if (count == (nums.length - 1)) {
        return maxIdx;
    }

    return -1;

};