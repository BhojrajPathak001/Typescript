enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
} //hum khud bhi enums ko value de skte hai but sare same hona chaheye agar default nature change kar rhe hai tou

const person = {
  name: "bhoraj",
  age: 23,
  role: Role.ADMIN,
};

console.log(person);
