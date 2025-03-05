console.log("🔁 All Looping Methods in JavaScript");

console.log('1️⃣ for Loop');
for (let i = 1; i <= 3; i++) {
    console.log("for Iteration:", i);
}


console.log('\n\n2️⃣ while Loop');
let j = 1;
while (j <= 3) {
    console.log("while Iteration:", j);
    j++;
}


console.log('\n\n3️⃣ do-while Loop');
let k = 1;
do {
    console.log("do-while Iteration:", k);
    k++;
} while (k <= 3);


console.log('\n\n4️⃣ for-in Loop (📌 Best for: Objects, but can be used for Arrays (though for...of is better)');
let obj = { a: 1, b: 2, c: 3 };
for (let key in obj) {
    console.log(`key and value of object is ${key}: ${obj[key]}`);
}


console.log('\n\n5️⃣ for-of Loop  (📌 Best for: Arrays, Strings, Sets)');
let arr = [1, 2, 3];
for (let value of arr) {
    console.log("for-of Iteration:", value);
}


console.log('\n\n6️⃣ forEach Loop (📌 Best for: Arrays (More readable than for loop))');
arr.forEach((value) => {
    console.log("forEach Iteration:", value);
});


console.log('\n\n map() Method (Returns Modified Copy)');
let arr1 = [1, 2, 3];
let arr2 = arr1.map((value) => {
    return value * 2;
});
console.log('original array is', arr1);
console.log('newly modify by map functions',arr2);

console.log('\n\n8️⃣ continue Loop');
for (let i = 1; i <= 3; i++) {
    if (i === 2) {
        continue;
    }
    console.log("continue Iteration:", i);
}


console.log('\n\n9️⃣ break Loop');
for (let i = 1; i <= 3; i++) {
    if (i === 2) {
        break;
    }
    console.log("break Iteration:", i);
}


console.log('\n\n18️⃣ filter() Method (Filter Elements from Array)');
let arr3 = [1, 2, 3, 4, 5];
let arr4 = arr3.filter((value) => {
    return value % 2 === 0;
});
console.log('original array is', arr3);
console.log('newly modify by filter functions',arr4);

console.log('\n\n19️⃣ reduce() Method (Reduce Array to a Single Value)');
let arr5 = [1, 2, 3, 4, 5];
let arr6 = arr5.reduce((acc, value) => {
    return acc + value;
}, 0);
console.log('original array is', arr5);
console.log('newly modify by reduce functions',arr6);   



