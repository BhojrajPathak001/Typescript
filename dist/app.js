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
    lastReport;
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get latestReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set latestReport(report) {
        if (!report) {
            throw new Error("No report provided");
        }
        this.lastReport = report;
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
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
accounting.latestReport = "";
console.log(accounting.latestReport);
