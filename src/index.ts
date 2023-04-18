import * as readline from 'readline';
import * as process from 'process';

interface Shape {
  calculateArea(): number;
  calculatePerimeter(): number;
}

class Rectangle implements Shape {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }

  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

class Triangle implements Shape {
  private base: number;
  private height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return 0.5 * this.base * this.height;
  }

  calculatePerimeter() {
    return 3 * this.base;
  }
}

class Circle implements Shape {
  private radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius ** 2;
  }

  calculatePerimeter() {
    return 2 * Math.PI * this.radius;
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter the number of sides of the shape: ', (numSidesStr) => {
  const numSides: number = parseInt(numSidesStr);

  if (numSides === 4) {
    rl.question('Enter the width of the rectangle: ', (widthStr) => {
      const width = parseFloat(widthStr);
      rl.question('Enter the height of the rectangle: ', (heightStr) => {
        const height = parseFloat(heightStr);
        const shape = new Rectangle(width, height);
        console.log(`Area: ${shape.calculateArea()}, Perimeter: ${shape.calculatePerimeter()}`);
        rl.close();
      });
    });
  } else if (numSides === 3) {
    rl.question('Enter the base of the triangle: ', (baseStr) => {
      const base = parseFloat(baseStr);
      rl.question('Enter the height of the triangle: ', (heightStr) => {
        const height = parseFloat(heightStr);
        const shape = new Triangle(base, height);
        console.log(`Area: ${shape.calculateArea()}, Perimeter: ${shape.calculatePerimeter()}`);
        rl.close();
      });
    });
  } else if (numSides === 1) {
    rl.question('Enter the radius of the circle: ', (radiusStr) => {
      const radius = parseFloat(radiusStr);
      const shape = new Circle(radius);
      console.log(`Area: ${shape.calculateArea()}, Circumference: ${shape.calculatePerimeter()}`);
      rl.close();
    });
  } else {
    console.log('Invalid number of sides.');
    rl.close();
  }
});
