var merge = function(nums1, m, nums2, n) {
    /**
     * @param {number[]} nums1
     * @param {number} m
     * @param {number[]} nums2
     * @param {number} n
     * @return {void} Do not return anything, modify nums1 in-place instead.
     */

    let idx = 0; // start index for inserting nums2

    for (let i = m; i < nums1.length; i++) { // get each element of nums1 starting at nums2 index
        nums1.splice(i, 1, nums2[idx]); // insert nums2 into nums1
        idx++; // increase nums2 start index
    }

    for (let i = 0; i < nums1.length; i++) {
        for (let j = i + 1; j < nums1.length; j++) {
            if (nums1[j] < nums1[i]) {
                // sort array in increasing order
                let temp = nums1[i];
                nums1[i] = nums1[j];
                nums1[j] = temp;
            }
        }
    }

};