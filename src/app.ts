function Logger(logString: string) {
  //this are called facotry decorators into @Logger() bracket lagake call krna pdhta hai
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("hello")
class Person {
  name = "Max";
  constructor() {
    console.log("creating preson object...");
  }
}

