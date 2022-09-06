var longestCommonPrefix = function(strs) {
    /**
    * @param {string[]} strs
    * @return {string}
    */

    let prefix = "";

    if ((200 < strs.length) || (strs.length < 1)) { // constraint
        return prefix;
    }

    let minLen = [];

    for (let i = 0; i < strs.length; i++) {
        if ((200 < strs[i].length) || (strs[i].length < 0)) { // constraint
            return strs[0];
        }
        strs[i].toLowerCase(); // constraint
        minLen.push(strs[i].length);
    }

    let mplen = Math.min(...minLen);
    let count = 0;

    for (let i = mplen; 0 < i; i--) {

        prefix = strs[0].substring(0, i); // get longest possible common prefix substring
        count = 0; // reset matches count to zero each time

        for (let j = strs.length - 1; 0 < j; j--) {

            if ((strs[j - 1].substring(0, i)) == (strs[j].substring(0, i))) {
                count++; // keep count of matches
            }
            else {
                break; // no match so go to next i length
            }

        }

        if (count == (strs.length - 1)) {
            return prefix; // return longest common prefix substring
        }
        else {
            prefix = ""; // if no match set empty
        }

    }

    return prefix;

};