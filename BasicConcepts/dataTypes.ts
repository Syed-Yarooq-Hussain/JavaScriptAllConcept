console.log("\n\n\n\n---------   Primitive Data Types    --------------------")
console.log("--> Immutable (cannot be modified)")
console.log("--> stored by value")


let age = 25;       // Number
let names = "John";  // String
let isStudent = true; // Boolean
let value;          // Undefined
let empty = null;   // Null
let bigNumber = 12345678901234567890n; // BigInt
let uniqueId = Symbol("id"); // Symbol

console.log(age, typeof age);       // number
console.log(names, typeof names);      // string
console.log(isStudent, typeof isStudent); // boolean
console.log(value, typeof value);     // undefined
console.log(empty, typeof empty);     // object (JavaScript bug!)
console.log(bigNumber, typeof bigNumber); // bigint
console.log(uniqueId, typeof uniqueId);  // symbol


console.log("\n\n\n---------  Non Primitive Data Types    --------------------")
console.log("--> Mutable (can be changed)")
console.log("--> stored by reference (Not by value)")

let person = { name: "Ali", age: 30 };  // Object
let numbers = [1, 2, 3, 4, 5];          // Array
function greet() { console.log("Hello!"); } // Function

console.log(person, typeof person);  // object
console.log(numbers, typeof numbers); // object (Arrays are objects in JS)
console.log(greet, typeof greet);   // function



const checkImutable = async () => {
    
    console.log("\n\n\n---------    Immutable    --------------------")
    let a = {name: "syed"};
    console.log('Original :', { name: 'syed' });

    let b = a;
    b.name = 'yarooq';
    console.log('updated :', a);
    console.log("__________________________________________")
}


checkImutable();
