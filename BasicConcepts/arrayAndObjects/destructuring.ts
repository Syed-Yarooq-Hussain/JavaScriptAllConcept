console.log('********************** Array Destructuring **********************');

let numbers = [10, 20, 30, 40, 50, 60];

let a = numbers[0];
let b = numbers[1];

console.log(a, b); // must be 10, 20

let [c, d, e] = numbers;
console.log(c, d, e); // must be 10, 20, 30

//skipping values 
let [f, , g] = numbers;
console.log(f, g); // must be 10, 30

//swapping values
let x=1, y=2;

console.log('original' ,x, y);
[x, y] = [y, x];
console.log('swapped' ,x, y);


console.log('using the triple ... destructuring');
let [m, ...n] = numbers;
console.log(m, n);


console.log('\n\n\n********************** Object Destructuring **********************');

let person = { name: "Yarooq", age: 30, city: "Karachi" };

console.log("actual object ", person)

console.log("destructuring object {name, age, city} = person", {name, age, city} = person);

console.log("destructuring object {name, age} = person", {name, age} = person);

let newPerson = {...person, comment: "This is a comment with a shallow copy"}
console.log("destructuring object newPerson = ...person", newPerson);

//function destructuring 

let greets = function ({ name, age }) {
    console.log(`Hello ${name}, you are ${age} years old`);
};

greets(person);
