//#Different ways to write functions

//1st way
function add(a: number,b: number){
    return a+b;
}
console.log(add(5,6));

//2nd way
const sub = (a: number, b: number) : number => a - b;

console.log(sub(2,3));

//2nd way but another variations

const mult = function(a: number, b: number): number{
    return a*b;
}

console.log(mult(3,4));



//************************************************ */

//#Optional Parameters
function addd(a: number,b: number, c?:number){ //we can pass three or two it will not give an error.
    return a+b;
}
console.log(addd(5,6));

//************************************************ */

//#Required Parameters
//--pass default paramenter

function subb(a: number,b: number, c:number = 4){ //we can pass three or two it will not give an error.
    return a-b-c;
}
console.log(subb(6,4));


//************************************************ */

//#Rest Parameters
//...spread operator
function add2(a: number, b: number, ...c: number[]): number{
    return a + b + c.reduce((a,b) => a+b,0);
}

// let arr = [5,6,7];
//the rest parameter allows you to represent an indefinite number of arguments as an array.
console.log(add2(2,3,5,6,7,8));

//************************************************ */
//#Generic Function

function getItems<Type> (items: Type[]): Type[]{
    return new Array<Type>().concat(items);
}

let concatRes = getItems<number>([1,2,3,4,5]);

console.log(concatRes);


let concatString = getItems<string>(["a","b","c","d"]);

console.log(concatString);
