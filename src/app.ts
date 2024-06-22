function merge<T extends object, U extends object>(objA: T, objB: U) {
  //here extends object are constraints that we set
  return Object.assign(objA, objB);
}

/*jab hum generics user krte hai aise and hum jab wo generic function call krte hai tou T and U ki
   jagah dynamic type chale jata hai apne aap humko specify nhi krna pdhta  */
const mergeObj1 = merge({ name: "bhojraj", hobbies: ["sports"] }, { age: 23 });
const mergeObj2 = merge<{ name: string }, { age: number }>( //yaha par ese bhi specify kar skte hai but redundant he yeh
  { name: "bhojraj" },
  { age: 23 }
);

// console.log(mergeObj1.name); // "bhojraj"
// console.log(mergeObj1.age); // 23
// console.log(mergeObj1.hobbies); // ['sports']

// console.log(mergeObj2.name); // "bhojraj"
// console.log(mergeObj2.age); // 23
// console.log(mergeObj2.hobbies); // ['sports']

// ------------------------------------------------------------------------------------------
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length === 1) {
    descriptionText = "got 1 element";
  } else if (element.length > 1) {
    descriptionText = "got " + element.length + " elements";
  }
  return [element, descriptionText];
}
