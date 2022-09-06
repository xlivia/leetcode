var arrayPairSum = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    let n = nums.length / 2; // number of pairs
    let maxsum = 0; // output min pair number sum
    let pairs = []; // initialize array for number pairs

    if ((Math.pow(10, 4) < n) || (n < 1) || (nums.length != (2 * n))) { // constraint
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if ((Math.pow(10, 4) < nums[i]) && (nums[i] < Math.pow(-10, 4))) { // constraint
            return;
        }
    }

    nums.sort(function(a, b) { return a - b; }); // sort nums from least to greatest

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < nums.length; j++) {
            let pmin = nums.shift(); // get and remove minimum value in nums array
            let pmax = nums.shift(); // get and remove new minimum value in nums array
            pairs.push([pmin, pmax]); // add numbers as a pair to new array
        }
        maxsum += Math.min(...pairs[i]); // add the minimum values in each pair
    }

    return maxsum;

};