"use strict";
const removeDuplicates = (arr) => {
    const result = arr.filter((a, index, self) => self.indexOf(a) == index);
    return result;
};
// console.log(removeDuplicates([ 2, 2, 3, 1, 1, 5]));
