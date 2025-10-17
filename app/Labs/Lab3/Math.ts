export function add(a: number, b: number): number      { return a + b; }
export function subtract(a: number, b: number): number { return a - b; }
export function multiply(a: number, b: number): number { return a * b; }
export function divide(a: number, b: number): number   { return a / b; }
const Math = {
  add,
  subtract,
  multiply,
  divide,
};
export default Math;
//this shows us the different ways of importing the functions and constants declared 
//in the Math library
//the export keyword makes it so that they can all be exported individually 
//the Math constant declares an object containing references to functions 
//WE EXPORT MATH AS THE DEFAULY EXPR SO THAT THE FUNCTIONS CAN BE IMPORTED AS 
//SINGLE OBJECT MAP