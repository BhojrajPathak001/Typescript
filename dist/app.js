"use strict";
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("bhojraj ", "patahk");
console.log(result.split(" "));
