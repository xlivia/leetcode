var addBinary = function(a, b) {
    /**
     * @param {string} a
     * @param {string} b
     * @return {string}
     */

    if ((Math.pow(10, 4) < b.length) || (a.length < 1)) { // constraint
        return;
    }

    if ((a[0] === '0') && (a.length !== 1)) { // constraint
        return;
    }

    if ((b[0] === '0') && (b.length !== 1)) { // constraint
        return;
    }

    for (let i = 0; i < a.length; i++) {
        if ((a.charAt(i) !== '1') && (a.charAt(i) !== '0')) { // constraint
            return;
        }
    }

    for (let i = 0; i < b.length; i++) {
        if ((b.charAt(i) !== '1') && (b.charAt(i) !== '0')) { // constraint
            return;
        }
    }

    let aNum = BigInt('0b' + a);
    let bNum = BigInt('0b' + b);
    let sum = aNum + bNum;

    return sum.toString(2);

};