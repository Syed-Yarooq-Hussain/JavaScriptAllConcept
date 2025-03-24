  // JavaScript have two types of method :

//Instance Methods – access through object .
//Static Methods – access through class .

// *************************** Instance Methods ***************************
class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    // ✅ Instance Method
    showBrand() {
      console.log(`Car brand: ${this.brand}`);
    }
  }
  
  const car1 = new Car("Toyota");
  car1.showBrand(); // ✅ Output: Car brand: Toyota
  
  // ❌ Error: Static method ko object se call nahi kar sakte
  // car1.someStaticMethod(); // ❌ Error

  

// *************************** Static Methods ***************************

class MathUtil {
    // ✅ Static Method
    static add(a, b) {
      return a + b;
    }
  }
  
  // ✅ Static method call with class
  console.log(MathUtil.add(5, 3)); // ✅ Output: 8
  
  // ❌ Error: Static method can't call via object 
  const mathObj = new MathUtil();
  // console.log(mathObj.add(5, 3)); // ❌ Error



  ////   """"""""""""""""""""""""""""


  class Person {
    constructor(name) {
      this.name = name;
    }
  
    // ✅ Instance Method
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  
    // ✅ Static Method
    static info() {
      console.log("This is a Person class");
    }
  }
  
  const p1 = new Person("Alice");
  p1.greet();  // ✅ Output: Hello, my name is Alice
  
  Person.info(); // ✅ Output: This is a Person class
  // p1.info(); // ❌ Error: Static method object se call nahi ho sakti