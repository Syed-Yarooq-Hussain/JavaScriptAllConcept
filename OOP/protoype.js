function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // ✅ Adding method using prototype
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
  };

  Person.prototype.bye = function() {
    console.log("Bye bye ",this.name)
  }
  
  const p1 = new Person("Alice", 25);
  const p2 = new Person("Bob", 30);
  
  p1.greet();
  p2.bye();




///// chaining prototypes
//This JavaScript code defines a constructor function Animal that takes a name parameter and assigns it to the name property of the newly created object.
function Animal(name) {
    this.name = name;
  }
  
  Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
  };
  
  function Dog(name, breed) {
    Animal.call(this, name); // ✅ Inherit properties
    this.breed = breed;
  }
  
  // ✅ Inheriting methods
  Dog.prototype = Object.create(Animal.prototype);
  
  Dog.prototype.bark = function() {
    console.log(`${this.name} barks!`);
  };
  
  const dog1 = new Dog("Buddy", "Golden Retriever");
  dog1.speak();
  dog1.bark();  

  


