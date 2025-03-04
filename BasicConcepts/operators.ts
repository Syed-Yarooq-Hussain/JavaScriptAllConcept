//1️⃣ Arithmetic Operators (Math Operations)
console.log('1️⃣ Arithmetic Operators (Math Operations)')

let a=2, b=3;
console.log('a,b',a,b);

//Addition
console.log('Addition a+b',a+b);

//Subtraction
console.log('Subtraction a-b',a-b); 

//Multiplication
console.log('Multiplication a*b',a*b);

//Division
console.log('Division a/b',a/b);

//Modulus
console.log('Modulus a%b',a%b);

//Exponentiation
console.log('Exponentiation a**b',a**b);

//Increment
console.log('Increment a++',a++);

//Decrement
console.log('Decrement a--',a--);

//2️⃣ Assignment Operators (=, +=, -=, etc.)
console.log('\n\n\n2️⃣ Assignment Operators (=, +=, -=, etc.)')
let x=3;

//Assignment
console.log('Assignment x=3',x);

//Addition Assignment  
console.log('Addition Assignment x+=3',x+=3);

//Subtraction Assignment
console.log('Subtraction Assignment x-=3',x-=3);

//Multiplication Assignment
console.log('Multiplication Assignment x*=3',x*=3);

//Division Assignment
console.log('Division Assignment x/=3',x/=3);

//Modulus Assignment
console.log('Modulus Assignment x%=3',x%=3);

//Exponentiation Assignment
x=3;
console.log('Exponentiation Assignment x**=3',x**=3);


//3️⃣ Comparison Operators (True/False Check)
let y=5 , z=5;
console.log(`\n\n\n\n\n\n\n 3️⃣ Comparison Operators (True/False Check) \n y=${y} , z=${z}`);


//Equal to
console.log('Equal to y==z',y==z);

//Not equal to  
console.log('Not equal to y!=z',y!=z);

//Greater than
console.log('Greater than y>z',y>z);

//Less than
console.log('Less than y<Z',y<z);

//Greater than or equal to
console.log('Greater than or equal to y>=z',y>=z);

//Less than or equal to
console.log('Less than or equal to y<=z',y<=z);

//Strict equal to
console.log('Strict equal to y===z',y===z);

//Strict not equal to
console.log('Strict not equal to y!==z',y!==z);


//4️⃣ Logical Operators (True/False Check)
console.log('\n\n\n\n4️⃣ Logical Operators (True/False Check)')
console.log('true && false =', true && false); // false
console.log('5 > 3 || 10 < 2', 5 > 3 || 10 < 2); // true
console.log('!(5 > 3)', !(5 > 3)); // false


console.log('\n\n\n 5️⃣ Bitwise Operators (Binary Operations)');

console.log('AND    5 & 3 =', 5 & 3); // 1
console.log('OR     5 | 3 =', 5 | 3); // 7
console.log('XOR    5 ^ 3 =', 5 ^ 3); // 6
console.log('NOT    ~5 =', ~5); // -6
console.log('LEFT   5 << 2 =', 5 << 2); // 20
console.log('RIGHT  5 >> 2 =', 5 >> 2); // 1


console.log('\n\n\n 6️⃣ Ternary Operator (Short If-Else)');

console.log('a > b ? "a is greater" : "b is greater"', a > b ? "a is greater" : "b is greater");


console.log('\n\n\n 7️⃣ Nullish Coalescing Operator (Null Check)');
let c = null;
console.log('c ?? "default value"', c ?? "default value");

console.log('\n\n\n\n 7️⃣ Type Operators (typeof, instanceof)');
let d = {name:'yarooq'};
console.log('typeof c', typeof c);
console.log('d instanceof Object', d instanceof Object);