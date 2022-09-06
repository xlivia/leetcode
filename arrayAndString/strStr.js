var strStr = function(haystack, needle) {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */

    if ((Math.pow(10, 4) < needle.length) || (haystack.length < 1)) { // constraint
        return 0;
    }

    for (let i = 0; i < haystack.length; i++) {
        haystack.toLowerCase(); // constraint
    }

    for (let i = 0; i < needle.length; i++) {
        needle.toLowerCase(); // constraint
    }

    return haystack.search(needle);

};