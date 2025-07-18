"use strict";
// class Department {
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     describe(this:Department):void{
//         console.log(`Department: ${this.name}`);
//     }
// }
// const accounting = new Department('Accounting');
// accounting.describe();
// const accountingCopy = {
//     describe : accounting.describe(),
//     name:"Dummpy",
// }
// console.log(accountingCopy)
//?Access Identifiers
// public, private, protected
//? public - accessible from everywhere
//? private - accessible only within the class
//? protected - accessible only within the class and its subclasses
//? readonly - property can only be set at initialization or in the constructor
//? static - property or method belongs to the class itself, not to instances of the class
// class Department {
//     // public name:string ;
//     // private employees : string[];
//     constructor(public name:string,private employees : string[]){ // short hand property declaration
//         // this.name = name;
//         // this.employees = [];
//     }
//     describe(this:Department):void{
//         console.log(`Department: ${this.name}`);
//     }
//     addEmployee(emp : string) : void {
//         this.employees.push(emp);
//     }
//     printEmployeeInformation(): void {
//         console.log(this.employees.length);
//         console.log(this.employees);
//     }
// }
// const accounting = new Department('Accounting',[]);
// accounting.describe();
// accounting.addEmployee("max")
// accounting.addEmployee("manu");
// accounting.printEmployeeInformation();
//? Readonly Properties
class Department {
    constructor(n) {
        this.name = n;
        this.employees = [];
    }
    describe() {
        console.log(`Department: ${this.name}`);
    }
    addEmployee(emp) {
        this.employees.push(emp);
    }
    printEmployeeInformation() {
        console.log("Number of employees: " + this.employees.length);
        console.log("Employees: " + this.employees.join(", "));
    }
}
const accounting = new Department('Accounting');
accounting.addEmployee("max");
accounting.addEmployee("manu");
accounting.printEmployeeInformation();
accounting.employees = ["new employee"]; // This line will not throw an error because employees is not readonly
accounting.printEmployeeInformation(); // This will show the updated employee list
