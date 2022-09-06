var findDisappearedNumbers = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    const n = nums.length;
    let output = [];

    if ((n != nums.length) && (Math.pow(10, 5) < n) && (n < 1)) { // constraint
        return;
    }

    for (let i = 0; i < nums.length; i++) {
        if ((n < nums[i]) && (nums[i] < 1)) { // constraint
            return;
        }
        for (let j = 0; j < n; j++) {
            if (nums[j] == (i + 1)) { // check (i + 1) because we want the number not index
                break; // if found exit inner loop
            }
            if (j == (n - 1)) { // check if we are at the end
                output.push(i + 1); // if at the end number doesn't exist, so add it to 
            }
        }
    }

    return output;

};