var findNumbers = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    let numsStrArr = []; // number string array for length of nums array elements
    let numsNumArr = []; // number array for length of numsStrArr array elements
    let count = 0;

    for (let i = 0; i < nums.length; i++) { // for each element in nums
        for (let j = 0; j < nums[i].toString().length; j++) { // for each element in nums[i]
            numsStrArr[i] = nums[i].toString().length; // number of digits in nums[i]
        }
    }

    for (let i = 0; i < numsStrArr.length; i++) {
        numsNumArr[i] = numsStrArr[i].valueOf();
        if (numsNumArr[i] % 2 === 0) {
            count++;
        }
    }

    return count;

};