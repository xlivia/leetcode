var findDiagonalOrder = function(mat) {
    /**
     * @param {number[][]} mat
     * @return {number[]}
     */
    /*
    Matrix Map =>
    [
        [0,0] [0,1] [0,2]
        [1,0] [1,1] [1,2]
        [2,0] [2,1] [2,2]
    ]
    */
    /*
    Output Array =>
    [
        [0,0]
        [0,1] [1,0]
        [2,0] [1,1] [0,2]
        [1,2] [2,1]
        [2,2]
    ]
    */

    let m = mat.length; // number of rows
    let n = mat[0].length; // number of columns

    let colBegin = 0; // column index
    let rowBegin = 0; // row index
    let idx = 0;

    let stack = []; // temporary storage array
    let diag = []; // output array

    /*
    let pyrows = m + n - 1; // number of rows in the output pyramid
    let peak = m; // max length of pyramid for diagonal

    if (m < n) { // column length greater than row length
        peak = n - m + 1;
    }
    else if (n < m) { // row length greater than column length
        peak = m - n + 1;
    }
    else { // row and column length are equal
        peak = m;
    }
    */

    for (let i = 0; i < m; i++) {
        if ((Math.pow(10, 4) < n) || (m < 1)) { // constraint
            return;
        }
        if ((Math.pow(10, 4) < (m * n)) || ((m * n) < 1)) { // constraint
            return;
        }
        for (let j = 0; j < n; j++) {
            if ((Math.pow(10, 5) < mat[i][j]) || (mat[i][j] < Math.pow(-10, 5))) { // constraint
                return;
            }
        }
    }

    /*
    let currow = 1;
    for (let i = 0; i < pyrows; i++) {
        currow = i + 1;
        let j = 0;
        while (j < currow) {
            diag.push(mat[i][j]);
            if (currow % 2 === 0) {
                i++;
                j--;
            }
            else {
                i--;
                j++;
            }
        }
    }
    */

    while ((rowBegin < m) || (colBegin < n)) {
        for (let row = rowBegin, col = colBegin; (row < m) && (0 <= col); row++, col--) {
            if (idx % 2 === 0) {
                stack.push((mat[row][col]));
            }
            else {
                diag.push(mat[row][col]);
            }
        }
        idx++;
        while (stack.length) {
            diag.push(stack.pop());
        }
        colBegin++;
        if ((colBegin > (n - 1)) && (rowBegin < m)) {
            colBegin = n - 1;
            rowBegin++;
        }
    }

    return diag;

};