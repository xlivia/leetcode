var validMountainArray = function(arr) {
    /**
     * @param {number[]} arr
     * @return {boolean}
     */

    let start = arr[0];
    let startIdx = 0;
    let climax = arr[0];
    let climaxIdx = 0;
    let end = arr[arr.length - 1];
    let endIdx = arr.length - 1;

    for (let i = 0; i <= arr.length - 1; i++) {

        if (((Math.pow(10, 4)) < arr.length) && (arr.length < 1)) { // constraint
            return;
        }

        if (((Math.pow(10, 4)) < arr[i]) && (arr[i] < 0)) { // constraint
            return;
        }

        if (arr.length < 3) {
            // if less than 3 than it cannot be a mountain array
            return false;
        }

        while (arr[i] < arr[i + 1]) {
            i++; // if current is less than next, then move to next index
        }

        climax = arr[i]; // set the peak of the mountain
        climaxIdx = i; // index of mountain peak

        while (arr[i] > arr[i + 1]) {
            i++; // if current is greater than next, then move to next index
        }

        if (endIdx != i) {
            // end of mountain cannot go up again
            return false;
        }

        if (climaxIdx == endIdx) {
            // climax of arr cannot be the end
            return false;
        }

        if (climaxIdx == startIdx) {
            // climax of arr cannot be the start
            return false;
        }

    }

    return true; // if arr is mountain array

};