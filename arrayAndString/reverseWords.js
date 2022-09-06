var reverseWords = function(s) {
    /**
     * @param {string} s
     * @return {string}
     */

    if ((Math.pow(10, 4) < s.length) || (s.length < 1)) { // constraint
        return;
    }

    for (let i = 0; i < s.length; i++) {
        if ((127 < s.charCodeAt(i)) || (s.charCodeAt(i) < 32)) { // constraint
            return;
        }
    }

    let words = s.split(' ');

    words = words.filter(word => word);
    words.reverse();

    s = words.join(' ');

    return s;

};