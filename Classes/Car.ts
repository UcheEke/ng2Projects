/**
 * Created by ekeu on 22/03/16.
 */

// We'll create a basic class "Car" with one property, distance, a move() method and a constructor
// for initialisation. We'll also enforce the implementation of two interfaces: ICarProps and ICarMethods

interface ICarProps {
    distance: number;
}

interface ICarMethods {
    move(): void;
}

class Car implements ICarMethods, ICarProps {
    distance: number;
    
    constructor() {
        this.distance = 0;
    }
    move(): void{
        this.distance += 1;
    }
}
// Exporting the class from this module allows main.ts to import it
export {Car}
