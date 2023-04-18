"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = __importStar(require("readline"));
var process = __importStar(require("process"));
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.calculatePerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(base, height) {
        this.base = base;
        this.height = height;
    }
    Triangle.prototype.calculateArea = function () {
        return 0.5 * this.base * this.height;
    };
    Triangle.prototype.calculatePerimeter = function () {
        return 3 * this.base;
    };
    return Triangle;
}());
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.calculatePerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question('Enter the number of sides of the shape: ', function (numSidesStr) {
    var numSides = parseInt(numSidesStr);
    if (numSides === 4) {
        rl.question('Enter the width of the rectangle: ', function (widthStr) {
            var width = parseFloat(widthStr);
            rl.question('Enter the height of the rectangle: ', function (heightStr) {
                var height = parseFloat(heightStr);
                var shape = new Rectangle(width, height);
                console.log("Area: ".concat(shape.calculateArea(), ", Perimeter: ").concat(shape.calculatePerimeter()));
                rl.close();
            });
        });
    }
    else if (numSides === 3) {
        rl.question('Enter the base of the triangle: ', function (baseStr) {
            var base = parseFloat(baseStr);
            rl.question('Enter the height of the triangle: ', function (heightStr) {
                var height = parseFloat(heightStr);
                var shape = new Triangle(base, height);
                console.log("Area: ".concat(shape.calculateArea(), ", Perimeter: ").concat(shape.calculatePerimeter()));
                rl.close();
            });
        });
    }
    else if (numSides === 1) {
        rl.question('Enter the radius of the circle: ', function (radiusStr) {
            var radius = parseFloat(radiusStr);
            var shape = new Circle(radius);
            console.log("Area: ".concat(shape.calculateArea(), ", Perimeter: ").concat(shape.calculatePerimeter()));
            rl.close();
        });
    }
    else {
        console.log('Invalid number of sides.');
        rl.close();
    }
});
