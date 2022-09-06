var reverseWords = function(s) {
    /**
     * @param {string} s
     * @return {string}
     */

    if (((5 * Math.pow(10, 4)) < s.length) || (s.length < 1)) { // constraint
        return;
    }

    for (let i = 0; i < s.length; i++) {
        if ((255 < s.charCodeAt(i)) || (s.charCodeAt(i) < 0)) { // constraint
            return;
        }
    }

    let words = s.split(' ');
    words = words.filter(word => word);

    for (let i = 0; i < words.length; i++) {
        let word = words[i].split('');
        word.reverse();
        words[i] = word.join('');
    }

    s = words.join(' ');
    words = s.split('');

    return s;

};