class Department {
  name: string;
  protected employees: string[] = []; // Private field using #

  constructor(public id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployees() {
    console.log(this.employees);
  }
}

class ItDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
  addEmployee(employee: string): void {
    if (employee === "bhojraj") return;
    this.employees.push(employee);
  }
}

const it = new ItDepartment("d1", ["bhojraj"]);
it.addEmployee("bhojraj");
it.addEmployee("kishanraj");

// The following line will give an error because #employees is truly private
// console.log(accounting.#employees); // SyntaxError in JavaScript and TypeScript error in TypeScript

const accounting = new AccountingDepartment("A1", ["nothing here"]);
accounting.addEmployee("bhojraj");
accounting.addEmployee("kishanraj");

accounting.printEmployees();
