var heightChecker = function(heights) {
    /**
     * @param {number[]} heights
     * @return {number}
     */

    if ((100 < heights.length) && (heights.length < 1)) { // constraints
        return;
    }

    let count = 0;
    let expected = [];

    for (let i = 0; i < heights.length; i++) {
        expected[i] = heights[i];
    }

    for (let i = 0; i < expected.length; i++) {
        for (let j = i + 1; j < expected.length; j++) {
            if (expected[j] < expected[i]) {
                let temp = expected[i];
                expected[i] = expected[j];
                expected[j] = temp;
            }
        }
    }

    for (let i = 0; i < heights.length; i++) {
        if ((100 < heights[i]) && (heights[i] < 1)) { // constraints
            return;
        }
        if (heights[i] != expected[i]) {
            count++;
        }
    }

    return count;

};