var moveZeroes = function(nums) {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */

    if ((Math.pow(10, 4) < nums.length) && (nums.length < 1)) { // constraint
        return;
    }

    nums.forEach(el => {
        if (((Math.pow(2, 31) - 1) < el) && (el < Math.pow(-2, 31))) { // constraint
            return;
        }
        if (el == 0) { // check if current is 0
            nums.push(el); // add current to end of array
            nums.splice(nums.indexOf(el), 1); // remove current from original spot in array
        }
    });

};