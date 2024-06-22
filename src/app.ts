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
