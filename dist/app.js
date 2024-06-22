"use strict";
function f1(n1, n2) {
    if (typeof n1 === "string" || typeof n2 === "string") {
        return n1.toString() + n2.toString();
    }
    return n1 + n2;
}
const e1 = {
    name: "bhojraj",
    startDate: new Date(),
};
function printEmployee(employee) {
    console.log(employee);
    if ("priviliges" in employee) {
        console.log("hello");
        console.log("priviliges: ", employee.priviliges);
    }
    if ("startDate" in employee) {
        console.log("startDate: ", employee.startDate);
    }
}
printEmployee(e1);
