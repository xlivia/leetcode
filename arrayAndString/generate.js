var generate = function(numRows) {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */

    let pascal = [];

    if ((30 < numRows) || (numRows < 1)) { // constraint
        return;
    }

    for (let i = 0; i < numRows; i++) { // populate initial starting triangle
        pascal.push([]); // create row
        for (let j = 0; j < (i + 1); j++) { // add initial values to each column in current created row
            if ((j === 0) || (j === ((i + 1) - 1))) { // check if at start or end of current row
                pascal[i].push(1); // add 1 to the start and end of each row
            }
            else {
                let sum = pascal[i - 1][j - 1] + pascal[i - 1][j]; // get sum of the 2 numbers directly above
                pascal[i].push(sum); // add val to current index
            }
        }
    }

    return pascal;

};