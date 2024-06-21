class Department {
  name: string;
  #employees: string[] = []; // Private field using #

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.#employees.push(employee);
  }

  printEmployees() {
    console.log(this.#employees);
  }
}

const accounting = new Department("Accounting");
accounting.addEmployee("bhojraj");
accounting.addEmployee("kishanraj");

// The following line will give an error because #employees is truly private
console.log(accounting.#employees); // SyntaxError in JavaScript and TypeScript error in TypeScript

accounting.printEmployees();
