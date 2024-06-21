class Department {
  name: string;
  private employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    //yeh this point out krta hai jo isko call krta hai aab agar hum accountingCopy bina name ke call kr de aur type
    //bhi specify na kre tou log undefined dega but agar type define kre tou
    //usko object dega pdega same Department ke structure ka
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
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
