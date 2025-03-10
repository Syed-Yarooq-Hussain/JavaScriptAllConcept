// IMPORTANT ARRAY METHODS IN JAVASCRIPT
let arr = [1, 2, 3, 4, 5];
console.log("Our Initial array", arr);

// 1️⃣ push() Method
// adds an element to the end of the array
arr.push(6);
console.log("\n\n after push 6, array is", arr);


// 2️⃣ pop() Method
// removes an element to the end of the array
arr.pop();
console.log("\n\n after pop method , array is", arr);

// 3️⃣ shift() Method
// removes an element to the start of the array
arr.shift();
console.log("\n\n after Shift method , array is", arr);

// 4️⃣ unshift() Method
// adds an element to the start of the array
arr.unshift(5);
console.log("\n\n after unshift method , array is", arr);


// 8️⃣ reverse() Method
// reverses the order of the elements       
console.log("\n\n after reverse method , array is",arr.reverse());

// 9️⃣ sort() Method
// sorts the elements
console.log("\n\n after sort method , array is",arr.sort());

// 1️⃣0️⃣ join() Method
// creates and returns a new string by concatenating all the elements in an array
console.log("\n\n after join method , array is",arr.join());

// 1️⃣1️⃣ indexOf() Method
// returns the first index at which a given element can be found in the array
console.log("\n\n after indexOf method arr.indexOf(5) , array is",arr, arr.indexOf(5));

// 1️⃣2️⃣ lastIndexOf() Method
// returns the last index at which a given element can be found in the array
console.log("\n\n after lastIndexOf method (lastIndexOf(0)) , array is",arr, arr.indexOf(5));

// 1️⃣3️⃣ find() Method
// returns the value of the first element in the array that satisfies the provided testing function
console.log("\n\n after find method (find(element => element > 3)) , array is", arr.find(element => element > 1));  


// 5️⃣ concat() Method
// joins two or more arrays
let newArr = [11, 12, 13];
arr = arr.concat(newArr);
console.log("\n\n after concat method attach array [11,12,13], array is", arr);

// 6️⃣ slice() Method
// creates a shallow copy of a portion of an array into a new array object selected from begin to end (end not included)
console.log("\n\n after slice method , array is", arr.slice(1, 2));

// 7️⃣ splice() Method
// adds new elements to an array, and removes old elements its create deep copy original array change
console.log("\n\n after splice method , array is", arr.splice(1, 2));