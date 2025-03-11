// 🕒 1. setTimeout & setInterval (Basic Async in JS)

console.log("Before setTimeout");
setTimeout(() => {
    console.log("Hello after 2 seconds!");
}, 2000);
console.log("After setTimeout");


let count = 1;
let intervalId = setInterval(() => {
    console.log("Repeated every 1 second:", count);
    count++;
    if (count > 5) {
        clearInterval(intervalId); // Stop after 5 times
    }
}, 1000);
