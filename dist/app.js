"use strict";
class Department {
    id;
    name;
    employees = []; // Private field using #
    constructor(id, n) {
        this.id = id;
        this.id = id;
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
class ItDepartment extends Department {
    admins;
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    reports;
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addReport(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (employee === "bhojraj")
            return;
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
