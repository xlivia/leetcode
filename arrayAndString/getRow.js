var getRow = function(rowIndex) {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */

    if ((33 < rowIndex) || (rowIndex < 0)) { // constraint
        return;
    }

    let pascal = [];

    for (let i = 0; i < rowIndex + 1; i++) { // populate initial starting triangle
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
    
    return pascal[rowIndex];

};