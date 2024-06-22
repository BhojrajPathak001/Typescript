"use strict";
function merge(objA, objB) {
    //here extends object are constraints that we set
    return Object.assign(objA, objB);
}
/*jab hum generics user krte hai aise and hum jab wo generic function call krte hai tou T and U ki
   jagah dynamic type chale jata hai apne aap humko specify nhi krna pdhta  */
const mergeObj1 = merge({ name: "bhojraj", hobbies: ["sports"] }, { age: 23 });
const mergeObj2 = merge(//yaha par ese bhi specify kar skte hai but redundant he yeh
{ name: "bhojraj" }, { age: 23 });
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "got " + element.length + " elements";
    }
    return [element, descriptionText];
}
