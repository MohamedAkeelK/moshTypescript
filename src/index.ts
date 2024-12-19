let age: number = 20
if (age < 50)
  age += 10;

let sales: number = 123_456_789;
let course: string = "typescript";
let is_published: boolean = true;
let level; // type any
level = 1;
level = "a"; // can assign to any type avoid using 

function render(document: any) { 
  console.log(document)
}

// can avoid the implicit any error by turning "noImplicitAny" setting to false : avoid using unless you know what your doing

// ARRAYS 

let numbers: number[] = [1, 2, 3];
// or let numbers = [1,2,3] 
let numbers2 = [] // is type any because array is empty, to use empty array explicity apply the type annotation. 
let numbers3: number[] = [1, 2, 3];

numbers.forEach(val => val.toString)




// TUPLES : fixed length array where each element has a particular type, often used when working with a pair of values like key value pairs. note: are internally represented using plain js arrays, 
 
// 1, "mosh"
let user: [number, string] = [1, "mosh"];

user.push(1) 
// note: compiler doesnt complain if 3rd value is added to tuple, hopefully will be solved in the future, as best practice restrict tuples to only 2 values because it becomes confusing to tell what the values actually reperesents. 




// ENUM : a list of related constants 

// const small = 1; 
// const medium = 2;
// const large = 3;

//PascalCase
const enum Size { Small = 1, Medium, Large }
// if not explicitly stated then first member(Small) would be initialized to 0. 
// if using strings then you need to explicitly state for all members 
// if const keyword is used for enums the compiler will generate more optimmized code

let mySize: Size = Size.Medium;

console.log(mySize)



// FUNCTIONS 

function calculateTax(income: number, taxYear?: number): number {
  if ((taxYear || 2022) < 50_000)
    return income * 1.2;
  return income * 1.3;
}

calculateTax(10_000, 2022); // note: cant pass more than 2 arguments like you can in js will get error
// to make parameter optional add "?" before colon of param  
//ORRRRRR ....
// set a default val for param 

function calculateTax2(income: number, taxYear = 2022): number {
  if (taxYear < 50_000)
    return income * 1.2;
  return income * 1.3;
}


// as best practice we should annotate our functions with the return type , in this case :number or void if no value is returned 
// as best practice we shouldnt have any unused parameters in function, is not part of strict setting by default 
// in tsconfig file turn "noUnusedParameters" on to see this warning 
// - turn "noImplicitReturns": on
// - turn "noUnusedLocals" on 




