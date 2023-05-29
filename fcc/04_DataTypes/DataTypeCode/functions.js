"use strict";
//#Different ways to write functions
//1st way
function add(a, b) {
    return a + b;
}
console.log(add(5, 6));
//2nd way
const sub = (a, b) => a - b;
console.log(sub(2, 3));
//2nd way but another variations
const mult = function (a, b) {
    return a * b;
};
console.log(mult(3, 4));
//************************************************ */
//#Optional Parameters
function addd(a, b, c) {
    return a + b;
}
console.log(addd(5, 6));
//************************************************ */
//#Required Parameters
//--pass default paramenter
function subb(a, b, c = 4) {
    return a - b - c;
}
console.log(subb(6, 4));
//************************************************ */
//#Rest Parameters
//...spread operator
function add2(a, b, ...c) {
    return a + b + c.reduce((a, b) => a + b, 0);
}
// let arr = [5,6,7];
console.log(add2(2, 3, 5, 6, 7, 8));
//************************************************ */
//#Generic Function
function getItems(items) {
    return new Array().concat(items);
}
let concatRes = getItems([1, 2, 3, 4, 5]);
console.log(concatRes);
let concatString = getItems(["a", "b", "c", "d"]);
console.log(concatString);
