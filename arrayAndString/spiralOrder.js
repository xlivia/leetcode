var spiralOrder = function(matrix) {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */

    let m = matrix.length;
    let n = matrix[0].length;
    let spiral = [];
    let s = 0;

    if ((10 < n) || (m < 1)) { // constraint
        return;
    }

    for (let i = 0; i < m; i++) {
        n = matrix[i].length;
        for (let j = 0; j < n; j++) {
            if ((100 < matrix[i][j]) || (matrix[i][j] < -100)) { // constraint
                return;
            }
        }
    }

    while ((0 < matrix.length) && (0 < matrix[0].length)) {
        switch (s) {
            case 0: // going left
                spiral = spiral.concat(matrix[0]); // add to spiral
                matrix = matrix.slice(1); // remove from matrix to keep track of what we already added
                s = 1; // go to next case
                break;
            case 1: // going down
                for (let i = 0; i < matrix.length; i++) {
                    spiral.push(matrix[i].pop()); // add to spiral and remove from matrix
                }
                s = 2; // go to next case
                break;
            case 2: // going right
                spiral = spiral.concat(matrix.pop().reverse());  // add to spiral and remove from matrix
                s = 3; // go to next case
                break;
            case 3: // going up
                for (let i = matrix.length - 1; 0 <= i; i--) {
                    spiral.push(matrix[i][0]); // add to spiral
                    matrix[i] = matrix[i].slice(1); // remove from matrix so no double add
                }
                s = 0; // go back to first case
                break;
        }
    }

    return spiral;

};