// ✅ Function Declaration (Hoisted)
console.log(hello()); // Works!
function hello() {
    return "Hello from Declaration!";
}

// ❌ Function Expression (Not Hoisted)
// console.log(greet()); // ❌ Error: Cannot access before initialization
const greeting = function() {
    return "Hello from Expression!";
};