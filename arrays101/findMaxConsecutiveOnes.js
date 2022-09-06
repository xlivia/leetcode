var findMaxConsecutiveOnes = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    let start; // start index of consecutive ones
    let end; // end index of consecutive ones
    let cOnes = []; // array of consecutive ones from each start index
    let count = 0; // count of consecutive ones
    let max; // max of consecutive ones

    for (let i = 0; i < nums.length; i++) {
        cOnes[i] = 0; // initialize each index of consecutive ones
    }

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === 1) {

            start = i; // set start index
            count = 0;

            for (let j = i; j < nums.length; j++) {

                if (nums[j] === 0) { // end of consecutive ones

                    end = j - 1; // set end index
                    i = j; // keep looking for ones after the current consecutive ones are done
                    break; // get out of loop

                }

                count++; // keep count of consecutive ones

            }

            cOnes[start] = count; // change start index of consecutive ones to match

        }

    }

    max = Math.max(...cOnes); // find max consecutive ones

    return max;

};