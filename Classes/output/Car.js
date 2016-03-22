/**
 * Created by ekeu on 22/03/16.
 */
"use strict";
var Car = (function () {
    function Car() {
    }
    Car.prototype.move = function () {
        this.distance += 1;
    };
    return Car;
}());
exports.Car = Car;
//# sourceMappingURL=Car.js.map