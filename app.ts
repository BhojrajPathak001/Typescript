type combinable = number | string; //type aliases in typescript

function combine(
  input1: combinable,
  input2: combinable,
  resultConversion: "as-number" | "as-text" //literal types
) {
  if (
    typeof input1 === "number" &&
    typeof input2 === "number" &&
    resultConversion === "as-number"
  ) {
    return input1 + input2;
  } else {
    return input1.toString() + input2.toString();
  }
}

const age = combine(1, 2, "as-number");
const fullName = combine("bhojraj ", "pathak", "as-text");

console.log(age);
console.log(fullName);
