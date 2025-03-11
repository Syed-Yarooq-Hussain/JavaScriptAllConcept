function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // ✅ Accessing outer function variable
    }

    return innerFunction;
}

const myClosure = outerFunction();
myClosure(); // Output: I am from outer function


// Example create counter
function createCounter() {
    let count = 0;

    return function () {
        count++;
        console.log("Current Count:", count);
    };
}

const counter = createCounter();
counter(); // Output: Current Count: 1
counter(); // Output: Current Count: 2
counter(); // Output: Current Count: 3