var reverseString = function(s) {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */

    if ((Math.pow(10, 5) < s.length) || (s.length < 1)) { // constraint
        return;
    }
    for (let i = 0; i < s.length; i++) {
        if ((126 < s[i].charCodeAt(i)) && (s[i].charCodeAt(i) < 32)) { // constraint
            return;
        }
    }

    return s.reverse();

};