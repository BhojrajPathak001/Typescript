"use strict";
function moveAnimal(animal) {
    let speed;
    switch (animal.tpe) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
        default:
            break;
    }
}
