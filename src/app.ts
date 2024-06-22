interface Bird {
  tpe: "bird";
  flyingSpeed: number;
}
interface Horse {
  tpe: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  //rather than using in keyword for checking some property we use a commmon property in all inteface which
  //jo ek dusre ko alg banate hai and uske basis par check kr lete hai using switch case
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
