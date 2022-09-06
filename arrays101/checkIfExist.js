var checkIfExist = function(arr) {
    /**
    * @param {number[]} arr
    * @return {boolean}
    */

    for (let i = 0; i < arr.length; i++) { // get all arr elements

        if ((500 < arr.length) && (arr.length < 2)) { // constraint
            return;
        }

        if (((Math.pow(10, 3)) < arr[i]) && (arr[i] < (Math.pow(-10, 3)))) { // constraint
            return;
        }

        for (let j = 0; j < arr.length; j++) { // get all arr elements
            if (i != j) { // check is current is the same as element
                if ((0 <= i) && (j < arr.length)) { // constraint
                    if (arr[i] == (2 * arr[j])) { // check if element is double of current
                        return true; // if there is a double
                    }
                }
            }
        }

    }

    return false; // if there is no double

};