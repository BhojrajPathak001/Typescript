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
  private lastReport: string;
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  get latestReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set latestReport(report: string) {
    if (!report) {
      throw new Error("No report provided");
    }
    this.lastReport = report;
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

accounting.latestReport="";
console.log(accounting.latestReport);
