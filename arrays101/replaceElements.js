var replaceElements = function(arr) {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */

    let rightArr = [];
    let rightMax = -1;

    for (let i = 0; i < arr.length; i++) {
        rightArr = arr.slice(i + 1); // make array of the elements right of current
        if (rightArr.length == 0) { // end or arr
            rightMax = -1;
        }
        else {
            rightMax = Math.max(...rightArr); // find max element
        }
        arr[i] = rightMax; // replace max element
    }

    return arr;

};