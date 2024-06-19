function combine(input1, input2) {
    if (typeof input1 === "number" && typeof input2 === "number") {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
var age = combine(1, 2);
var fullName = combine("bhojraj ", "pathak");
console.log(age);
console.log(fullName);
