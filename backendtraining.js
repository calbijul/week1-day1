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




  
  

    






