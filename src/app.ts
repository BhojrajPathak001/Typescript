function Logger(constructor: Function) {
  //decorastors are called when the class it defined not when it is instantiated
  console.log("logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";
  constructor() {
    console.log("creating preson object...");
  }
}

// const pers = new Person();
// console.log(pers);
