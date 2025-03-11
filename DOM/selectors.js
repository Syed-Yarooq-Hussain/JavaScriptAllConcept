// Get element by ID
let heading = document.getElementById("heading");
console.log("get using getElementById :: ",heading.innerText); // Output: Hello, DOM!

// Get element by tag
let tag = document.getElementsByTagName("h1");
console.log('using Tag getElementsByTagName', tag[0].innerText);

let clas = document.getElementsByClassName('class1');
console.log('using Tag getElementsByClassName', clas[0].innerText);
