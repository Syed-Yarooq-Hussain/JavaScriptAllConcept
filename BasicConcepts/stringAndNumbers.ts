// String functions

// String length
let str = "Hello, World!"; // length = 13
console.log('str.length', str.length);

// String concatenation
let str1 = "Hello, ";
let str2 = "World!";
let str3 = str1 + str2; // str3 = "Hello, World!"
console.log('str3', str3);

// String interpolation 
let names = "John";
let age = 30;
let message = `Hello, ${names}! You are ${age} years old.`; // message = "Hello, John! You are 30 years old."
console.log('message', message);

// String methods
let str4 = "Hello, World!";
let str5 = str4.toUpperCase(); // str5 = "HELLO, WORLD!"
console.log('str5', str5);

let str6 = "Hello, World!";
let str7 = str6.toLowerCase(); // str7 = "hello, world!"
console.log('str7', str7);

let str8 = "Hello, World!";
let str9 = str8.charAt(0); // str9 = "H"
console.log('str9', str9);  

let str10 = "Hello, World!";
let str11 = str10.indexOf("World"); // str11 = 7
console.log('str11', str11);

let str12 = "Hello, World!";
let str13 = str12.slice(0, 5); // str13 = "Hello"
console.log('str13', str13);

let str14 = "Hello, World!";
let str15 = str14.replace("World", "Universe"); // str15 = "Hello, Universe!"
console.log('str15', str15);

let str16 = "Hello, World!";
let str17 = str16.split(", "); // str17 = ["Hello", "World"]
console.log('str17', str17);

let str18 = "Hello, World!";
let str19 = str18.substring(7, 12); // str19 = "World"
console.log('str19', str19);

let str20 = "       Hello, World!  ";
let str21 = str20.trim(); // str21 = "Hello, World!"
console.log('str21', str21);


//_________________________Math Object (Math.random(), Math.floor(), Math.ceil())_______________________________________


console.log('\n\n\nMath Object (Math.random(), Math.floor(), Math.ceil())')

let randomNum = Math.random(); // random number between 0 and 1
console.log('randomNum using Math.random', randomNum);

let randomInt = Math.floor(8.75); // round off to lowest integer
console.log('randomInt', randomInt);

let randomInt2 = Math.ceil(8.75); // round off to highest integer
console.log('randomInt2', randomInt2);
