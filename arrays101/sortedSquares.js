var sortedSquares = function(nums) {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    let sqArr = [];
    let sortedArr = [];

    for (let i = 0; i < nums.length; i++) {
        sqArr[i] = Math.pow(nums[i], 2); // create squared array from nums
    }

    sortedArr = sqArr.sort();

    let i = 0;
    let j;

    while (i < sortedArr.length) {

        j = i + 1;

        while (j < sortedArr.length) {

            if (sortedArr[j] < sortedArr[i]) {

                let temp = sortedArr[i];
                sortedArr[i] = sortedArr[j];
                sortedArr[j] = temp;

            }

            j++;

        }

        i++;

    }

    return sortedArr;

};