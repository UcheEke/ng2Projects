import {Car} from './Car'

let car = new Car();

for (var i:number = 0; i < 3; i++){
    car.move();
}
console.log(car.distance);