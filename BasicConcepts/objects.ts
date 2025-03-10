// OBJECT (collection of key-value pairs)

let car = {
    color: "red",
    model: "bmw",
    year: 2021,
    isOk: function() {
        return "car is ready to drive.";
      } 
};

console.log('Our Object ===> ',car);

console.log("access car color by dot notation  car.color", car.color);

console.log("access car color by bracket notation car['color']", car['color']);

console.log("access car function by bracket notation car['isOk']", car['isOk']());


// add/update/delete object properties
car.color = "blue";
console.log("\n\n\nupdate car color by  car.color = blue ");

/* delete car.year; */
console.log("delete car year by delete car.year ");

console.log("add new key-pair value by car['isBroken'] = true ", car['isBroken'] = true);

console.log('Our Object after update ===> ',car);


console.log('\n\n\n 🔹 Object.keys(), Object.values(), Object.entries()')
// object keys, used to get the keys of an object
console.log('\n\nTo get all the keys in an object we user Object.keys(car)', Object.keys(car));


// object values, used to get the values of an object
console.log('\n\nTo get all the values in an object we user Object.values(car)', Object.values(car));


// object entries, used to get the key-value pairs of an object
console.log('\n\nTo get all the key-value pairs in an object we user Object.entries(car)', Object.entries(car));