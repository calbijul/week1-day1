console.log(
    'Problem #1: Evaluations\n',

  2 == '2',          // true, because '2' is converted to a number and compared
  'he' == 'she',     // false, because the strings are different
  2 === 2,           // true, because both the type and value are exactly the same
  'true' == true,    // false, because 'true' is a string and true is a boolean, not coercible to equal
  true === true,     // true, because both the value and type are the same
  'true' != true,    // true, because 'true' (string) and true (boolean) are not the same
  'true' !== true    // true, because 'true' (string) and true (boolean) are not the same type
);

console.log('\nProblem #2: Variable Declarations')
console.log(`Var: Old way of declaring variables. It can be re-declared and updated, but it has a function-scoped or globally-scoped behavior
  let: Newer way to declare variables. It can be updated but not re-declared in the same scope. Its block-scoped, meaning its limited to the block (like inside loops or conditionals) where it’s defined.
  const: Used to declare constants. The value cant be re-assigned after declaration. Its also block-scoped.`)

console.log('\nProblem #3: Function Types')
const greet = function(name) {
    return `Hello, ${name}!`;
  };
  console.log(greet("Kaizeel"));

  const hghOrder = [1, 2, 3, 4, 5];
  const maps = hghOrder.map(item => item + 2);
console.log(maps); 

  


console.log('\nProblem #4: Code Analysis')
const a = 'hi';
const someFunction = (arg) => {
const b = 'bye';
if (arg) {
const c = 'see ya!';
console.log(a); // hi
console.log(b); // bye
console.log(c); // see ya!
}
};
someFunction(true);

console.log('\nProblem #5: for loops')

const someArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < someArrays.length; i++) {
  console.log(someArrays[i]);
}



console.log('\nProblem #6: Array Methods')

const someArray = [1, 2, 3, 4, 5];
const concat = someArray.concat([]);
console.log('1.',concat);


const length = someArray.length;
console.log('2.',length);


const filter = someArray.filter(item => item !== 3);
console.log('3.',filter);


const find = someArray.find(item => item === 5);
console.log('4.',find); 


const slice = someArray.slice(2, 4); 
console.log('5.',slice); 


const splice = [...someArray];
splice.splice(2, 2); 
console.log('6.',splice); 


const includes = someArray.includes(4);
console.log('7.',includes); 

const indexOf = someArray.indexOf(2);
console.log('8.',indexOf); 


const isArray = Array.isArray(someArray);
console.log('9.',isArray); 


const join = someArray.join(", ");
console.log('10.',join); 


const map = someArray.map(item => item * 2);
console.log('11.',map); 


const pop = [...someArray];
pop.pop(); 
console.log('12.',pop); 


const push = [...someArray];
push.push(6); 
console.log('13.',push); 


const shift = [...someArray];
shift.shift();
console.log('14.',shift);


const unshift = [...someArray];
unshift.unshift(0); 
console.log('15.',unshift); 


const unsortedArray = [9, 1, 3, 5];
const sortedArray = unsortedArray.sort((a, b) => a - b); 
console.log('16.',sortedArray); 

const reduce = someArray.reduce((acc, currentValue) => acc + currentValue, 0);
console.log('17.',reduce);


console.log('\nProblem #7: Object Manipulation')

const someObject = {
    color: 'black',
    };

    Object.assign(someObject, { name: 'john doe' });
console.log(someObject); 

someObject.age = 22;
console.log(someObject); 

someObject['address'] = '123 test address';
console.log(someObject); 

const keys = Object.keys(someObject);
console.log(keys); 

const values = Object.values(someObject);
console.log(values); 

for (let key in someObject) {
    if (someObject.hasOwnProperty(key)) {
      console.log(key + ": " + someObject[key]);
    }
  }

console.log('\nProblem #8: Array of Objects')

  const obj = [
    { num: 1 },
    { num: 2 },
    { num: 3 }
  ];
  for (let i = 0; i < obj.length; i++) {
    console.log(obj[i].num); 
  }
  
console.log('\nProblem #9: Set Object')

const objSet = new Set();

objSet.add('john doe');
console.log(objSet);

const exists = objSet.has('john doe');
console.log(exists); 

objSet.delete('john doe');
console.log(objSet); 


console.log('\nProblem #10: Map Object')

const mapObj = new Map();

mapObj.set('name', 'john doe');
console.log(mapObj);

const hasJohnDoe = Array.from(mapObj.values()).includes('john doe');
console.log(hasJohnDoe); 

mapObj.delete('name');
console.log(mapObj); 

console.log('Problem #11: Asynchronous Programming')
console.log(`Asynchronous programming allows certain tasks to run independently without blocking the main program, 
  letting it continue executing other tasks. It’s useful for operations like loading data from a server or waiting for user input, 
  where you don't want to stop everything else while waiting. In JavaScript, this is typically handled with callbacks, promises, 
  or async/await to manage these tasks efficiently.`);

console.log('Problem #12: Callback Hell')
console.log(`Callback hell happens when you have many nested callbacks in your code, 
  making it messy and hard to understand or fix.`)

console.log('Problem #13: Promises')
console.log(`1. A **promise** is an object in JavaScript that represents a value that may not be available yet but will be at some point in the future, 
  such as the result of an asynchronous task like loading data from a server.

2. A promise can be in one of three states:
   - **Pending**: The promise is still waiting for the task to complete (like waiting for data to load).
   - **Fulfilled**: The task is complete, and the promise has successfully returned a result.
   - **Rejected**: Something went wrong during the task, and the promise has an error or failure.

In simple terms, a promise is like a "promise" to give you an answer later, and it can either succeed, fail, or still be waiting for the answer.`)

console.log('Problem #14: Async/Await')
console.log(`Async/await makes working with asynchronous code easier and more like regular, straight-forward code.
  * async makes a function return a promise.
  * await pauses the function until the promise finishes, so you can work with the result directly.`)






  
  

    






