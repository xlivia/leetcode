var twoSum = function(numbers, target) {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */

    let pair = []; // output

    if (((3 * Math.pow(10, 4)) < numbers.length) || (numbers.length < 2)) { // constraint
        return;
    }

    if ((1000 < target) || (target < -1000)) { // constraint
        return;
    }

    let singles = numbers.filter((ele , pos) => { return numbers.indexOf(ele) == pos; });

    for (let i = 0; i < singles.length; i++) {

        if ((1000 < numbers[i]) || (numbers[i] < -1000)) { // constraint
            return;
        }

        for (let j = numbers.length - 1; 0 <= j; j--) {

            if (j == i) { // skip numbers with the same index
                continue;
            }

            else {

                let sum = singles[i] + numbers[j]; // get sum of current numbers

                if (sum == target) { // check if we found numbers for target sum
                    pair.push(numbers.indexOf(singles[i]) + 1, j + 1); // add indices to pair array
                    pair.sort((a, b) => { return a - b; }); // sort pair from least to greatest
                    return pair;
                }

            }

        }

    }

    return pair;

};