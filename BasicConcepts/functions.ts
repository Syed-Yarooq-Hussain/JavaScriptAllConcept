// ✅ Function Declaration (Hoisted)
console.log(hello()); // Works!
function hello() {
    return "Hello from Declaration!";
}

// ❌ Function Expression (Not Hoisted)
// console.log(greet()); // ❌ Error: Cannot access before initialization
const greet = function() {
    return "Hello from Expression!";
};