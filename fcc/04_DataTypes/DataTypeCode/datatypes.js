"use strict";
///////////////////Strings/////////////////////
// let lname = 'Pranshu';
//Typesscprt have the ability to detemine the type of from the value which has been assigned. This is type inference
//but this is not recommended... always use type.
let lname = 'Pranshu';
let newName = lname.toUpperCase();
console.log(newName);
////////////////numbers/////////////////////////
let age = 20;
age = 25.5;
let convertAge = "25";
let res = parseInt(convertAge); //typecaste
///////////////boolean//////////////
let isValid = false; //default value is false in java and .NET language but it is not in the case in typescript
console.log(isValid); //make sure the, we have to define the boolean variable
//////////////////Array////////////////////
let empList;
let deptList;
//both are same, different way to define array
empList = ["Pranshu", "Rahul", "Uthasana"];
let numList;
numList = [1, 2, 3, 4, 5];
let result = numList.filter((e) => e > 3);
console.log(result);
let findValue = numList.find((e) => e === 2);
console.log("as", findValue);
//reduce
let sum = numList.reduce((acc, num) => acc + num);
console.log(sum);
let c = 2 /* BLUE */;
///////////////////////TUPLE/////////////
let swapNums;
function swapNumbers(num1, num2) {
    return [num2, num1];
}
swapNums = swapNumbers(10, 20);
console.log(swapNums);
/////////////////////ANY/////////////////////////
//avoid any in the codebase
let department;
department = "Pranshu";
department = 12;
//////////////////////Void///////////////////////
function additon(a, b) {
    a + b;
}
additon(2, 3);
//here void nothing returning
