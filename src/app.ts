type type3 = string | number;

function f1(n1: type3, n2: type3) {
  if (typeof n1 === "string" || typeof n2 === "string") {
    return n1.toString() + n2.toString();
  }
  return n1 + n2;
}
//-------------------------------------------------------
type Admin = {
  name: string;
  priviliges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

const e1: Employee = {
  name: "bhojraj",
  startDate: new Date(),
};

type unknownEmployee = Admin | Employee;

function printEmployee(employee: unknownEmployee) {
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
