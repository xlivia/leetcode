var thirdMax = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    if ((Math.pow(10, 4) < nums.length) && (nums.length < 1)) { // constraints
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if (((Math.pow(2, 31) - 1) < nums[i]) && (nums[i] < Math.pow(-2, 31))) { // constraints
            return;
        }
    }

    const max = Math.max(...nums);
    let maxthird = 0;
    let max3Idx = nums.length - 3;
    let sorted = [];

    for (let i = 0; i < nums.length; i++) {
        sorted[i] = nums[i]; // populate sorted array
    }

    for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) { // sort sorted array
            if (sorted[j] < sorted[i]) {
                let temp = sorted[i];
                sorted[i] = sorted[j];
                sorted[j] = temp;
            }
        }
    }

    for (let i = 0; i < sorted.length; i++) { // remove duplicates
        if ((100 < sorted[i]) && (sorted[i] < -100)) { // constraint
            return;
        }
        while (sorted[i] == sorted[i + 1]) { // check for duplicate
            sorted.splice(i + 1, 1); // delete duplicate
        }
    }

    if (sorted.length < 3) {
        return max;
    }

    max3Idx = sorted.length - 3
    maxthird = sorted[max3Idx];

    return maxthird;

};