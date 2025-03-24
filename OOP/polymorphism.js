class Shape {
    area() {
      return "Area calculation not defined!";
    }
  }
  
  class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius * this.radius;
    }
  }
  
  class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  }
  
  const circle = new Circle(5);
  const rectangle = new Rectangle(4, 6);
  
  console.log(circle.area());    // ✅ Output: 78.5398...
  console.log(rectangle.area()); // ✅ Output: 24
  