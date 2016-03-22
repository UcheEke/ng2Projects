"use strict";
var Car_1 = require('./Car');
var car = new Car_1.Car();
car.distance = 0;
for (var i = 0; i < 3; i++) {
    car.move();
}
console.log(car.distance);
//# sourceMappingURL=main.js.map