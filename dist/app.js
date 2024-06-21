"use strict";
class Department {
    name;
    constructor(n) {
        this.name = n;
    }
    describe() {
        //yeh this point out krta hai jo isko call krta hai aab agar hum accountingCopy bina name ke call kr de aur type
        //bhi specify na kre tou log undefined dega but agar type define kre tou
        //usko object dega pdega same Department ke structure ka
        console.log("Department: " + this.name);
    }
}
const accounting = new Department("Accounting");
const accountingCopy = { name: "bhojraj", describe: accounting.describe };
accountingCopy.describe();
