"use strict";
const removeDuplicates = (arr) => {
    const result = arr.filter((a, index, self) => self.indexOf(a) == index);
    return result;
};
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
