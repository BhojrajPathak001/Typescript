enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "bhoraj",
  age: 23,
  role: Role.ADMIN,
};

console.log(person);
