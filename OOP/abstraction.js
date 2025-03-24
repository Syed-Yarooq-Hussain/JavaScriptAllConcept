class Car {
    constructor(brand) {
      this.brand = brand;
    }
  
    startEngine() { 
      console.log(`${this.brand} engine started!`);
    }
  }
  
  const myCar = new Car("Tesla");
  // the functionallity of the startEngine function is complete hidden and we only have access to the startEngine method 
  myCar.startEngine();  // ✅ Output: Tesla engine started!
  
  console.log(myCar.brand); // ✅ Output: Tesla  