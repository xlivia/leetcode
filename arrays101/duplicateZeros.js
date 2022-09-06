var duplicateZeros = function(arr) {
    /**
     * @param {number[]} arr
     * @return {void} Do not return anything, modify arr in-place instead.
     */

    const oglength = arr.length; // the original length of array we want
    let ilength = 1; // keep track of length without element index (start at 1 instead of 0)

    for (let i = 0; i < arr.length; i++) { // go through each array element

        if ((Math.pow(10, 4) < arr.length ) && (arr.length < 1)) { // constarint
            return;
        }

        if (9 < (arr[i]) && (arr[i] < 0)) { // constraint
            return;
        }

        if (ilength == oglength) {
            // pop (remove) the rest of the array element once target length is reached
            let diff = arr.length - oglength; // get the number of elements after the target length
            for (let j = 0; j < diff; j++) {
                arr.pop(); // pop (remove) all element after target length
            }
        }

        if (arr[i] == 0) {
            arr.splice(i, 0, 0); // duplicate zeros
            i++; // add an index because we don't want the added zero being duplicated
        }

        ilength++; // keep track of length

    }

};