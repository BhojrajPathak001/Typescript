"use strict";
class Department {
    name;
    employees = [];
    constructor(n) {
        this.name = n;
    }
    describe() {
        //yeh this point out krta hai jo isko call krta hai aab agar hum accountingCopy bina name ke call kr de aur type
        //bhi specify na kre tou log undefined dega but agar type define kre tou
        //usko object dega pdega same Department ke structure ka
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployees() {
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
accounting.addEmployee("bhojraj");
accounting.addEmployee("kishanraj");
console.log(accounting.employees);
accounting.printEmployees();
