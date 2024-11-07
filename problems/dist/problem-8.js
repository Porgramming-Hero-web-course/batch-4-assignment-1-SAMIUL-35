"use strict";
function validateKeys(obj, keys) {
    // console.log(keys);
    return keys.reduce((result, key) => result && key in obj, true);
}
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));
