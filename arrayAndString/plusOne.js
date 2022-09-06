var plusOne = function(digits) {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */

    if ((100 < digits.length) || (digits.length < 1)) { // constraint
        return;
    }

    for (let i = 0; i < digits.length; i++) {
        if ((9 < digits[i]) || (digits[i] < 0)) { // constraint
            return;
        }
        if ((digits[i] === 0) && (i === 0) && ((i + 1) != digits.length)) { // constraint
            return;
        }
    }

    let num = BigInt(digits.join('')); // turn array into number
    num++; // add 1 to number
    num = Array.from(num.toString()); // convert number into string array
    digits = Array.from(num.map(digit => Number(digit))); // convert string array into number array

    return digits;

};