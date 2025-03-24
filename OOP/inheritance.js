class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic sound...");
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name); // Calling parent class constructor
      this.breed = breed;
    }
  
  }


  class Cat extends Animal {

    constructor(name) {
        super(name); // Calling parent class constructor
      }
    makeSound(){
        console.log("meow meow");
    }
  }
  
  const dog = new Dog("Buddy", "Labrador");
  console.log("dog sound ")
  dog.makeSound(); // ✅ Output: Woof woof!
  console.log(dog.name); // ✅ Buddy
  
  const cat = new Cat('abc')
  console.log("C A T");
  console.log(cat.name);
  cat.makeSound();
