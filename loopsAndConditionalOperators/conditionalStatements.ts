console.log("🔹 Conditional Statements in JavaScript");


const a = 25
const b = 20
console.log('a = ', a, 'b = ', b)

console.log('\n\n\n1️⃣ if Statement')

if (a > b) {
    console.log('a > b', a > b)
}


console.log('\n\n\n2️⃣ if-else Statement')

if (b > a) {
    console.log(true)
} else {
    console.log(false)
}


console.log('\n\n3️⃣ if...else if...else Statement')

let marks = 85;
if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}



console.log('\n\n4️⃣ switch Statement')

switch (marks) {
    case 90:
        console.log("Grade: A");
        break;
    case 75:
        console.log("Grade: B");
        break;
    case 60:
        console.log("Grade: C");
        break;
    default:
        console.log("Grade: F");
        break;
}


console.log('\n\n5️⃣ ternary Operator');

console.log(marks >= 50 ? "Pass" : "Failed");


console.log('\n\n6️⃣ Nullish Coalescing Operator');

let names = null;
console.log(names ?? "Guest");


console.log('\n\n7️⃣ Optional Chaining Operator');

let user = {
    name: "John",
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
    },
};
console.log('user',user)
console.log('----user?.address?.country----',user?.address?.country); 
//console.log('----user?.address?.name----',user?.address?.name);    


console.log('\n\n8️⃣ Short-Circuit Evaluation (&& and || for Quick Execution)');

let isLoggedIn = true;
isLoggedIn && console.log("User is logged in.");

let userName = null;
console.log(userName || "Default User");
