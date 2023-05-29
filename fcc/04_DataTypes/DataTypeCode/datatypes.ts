///////////////////Strings/////////////////////

// let lname = 'Pranshu';
//Typesscprt have the ability to detemine the type of from the value which has been assigned. This is type inference

//but this is not recommended... always use type.

let lname : string = 'Pranshu';
let newName = lname.toUpperCase();
console.log(newName);

////////////////numbers/////////////////////////

let age : number = 20;
age = 25.5;

let convertAge : string = "25";
let res = parseInt(convertAge);  //typecaste

///////////////boolean//////////////

let isValid : boolean = false; //default value is false in java and .NET language but it is not in the case in typescript
console.log(isValid); //make sure the, we have to define the boolean variable



//////////////////Array////////////////////

let empList : string[];
let deptList : Array<string>;
//both are same, different way to define array

empList = ["Pranshu", "Rahul", "Uthasana"];


let numList;
numList = [1,2,3,4,5];

let result = numList.filter((e)=> e>3);
console.log(result);

let findValue = numList.find((e)=> e === 2);
console.log("as",findValue);

//reduce
let sum = numList.reduce((acc, num) => acc+num);
console.log(sum);


//////////////////ENUM/////////////////////////

//use const with enum is generally good
const enum Color{
    RED,
    GREEN,
    BLUE
}

let c: Color = Color.BLUE;

///////////////////////TUPLE/////////////

let swapNums : [number,number];

function swapNumbers(num1: number, num2: number): [number,number]{
    return [num2, num1];
}

swapNums = swapNumbers(10,20);
console.log(swapNums);



/////////////////////ANY/////////////////////////

//avoid any in the codebase

let department: any;

department = "Pranshu";

department = 12;

//////////////////////Void///////////////////////

function additon(a: number,b: number): void{
     a+b;
}
additon(2,3);

//here void nothing returning