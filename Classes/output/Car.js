/**
 * Created by ekeu on 22/03/16.
 */
"use strict";
var Car = (function () {
    function Car() {
        this.distance = 0;
    }
    Car.prototype.move = function () {
        this.distance += 1;
    };
    return Car;
}());
exports.Car = Car;
// Exporting the class from this module allows main.ts to import it
//# sourceMappingURL=Car.js.map