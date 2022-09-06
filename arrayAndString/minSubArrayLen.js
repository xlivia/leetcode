var minSubArrayLen = function(target, nums) {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */

    let n = nums.length;
    let sublength = Number.MAX_VALUE;
    let subsum = 0;

    if ((Math.pow(10, 9) < target) || (target < 1)) { // constraint
        return;
    }

    if ((Math.pow(10, 5) < nums.length) || (nums.length < 1)) { // constraint
        return;
    }

    //nums.sort((a, b) => { return b - a; }); // sort nums from greatest to least
    //console.log(nums); // debug

    for (let i = 0; i < n; i++) {

        if ((Math.pow(10, 4) < nums[i]) || (nums[i] < 1)) { // constraint
            return;
        }

        subsum = 0; // reset sum

        for (let j = i; j < n; j++) {

            subsum += nums[j]; // add next element

            /*
            console.log(nums); // debug
            console.log('[' + nums[i] + ']'); // debug
            console.log('[' + nums[j] + ']'); // debug
            console.log(subsum); // debug
            console.log(sublength); // debug
            */

            if (subsum >= target) {
                sublength = Math.min(sublength, j - i + 1);
                //return sublength;
                break;
            }

        }

    }

    return sublength == Number.MAX_VALUE ? 0 : sublength;

};