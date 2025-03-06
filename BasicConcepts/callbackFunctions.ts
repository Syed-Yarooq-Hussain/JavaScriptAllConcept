function sayHi(name, callback){
    console.log('hello',name);
    callback(name);

}

function sayBye(name){
    console.log('Bye',name);
}

sayHi('syed',sayBye);




////// CALL BACK HELL EXAMPLE 
function first(callback) {
    setTimeout(() => {
        console.log("Step 1");
        callback();
    }, 1000);
}

function second(callback) {
    setTimeout(() => {
        console.log("Step 2");
        callback();
    }, 1000);
}

function third() {
    setTimeout(() => {
        console.log("Step 3");
    }, 1000);
}

// Nested callbacks (callback hell)
/* first(() => {
    second(() => {
        third();
    });
}); */

first(() => second(() => third()));