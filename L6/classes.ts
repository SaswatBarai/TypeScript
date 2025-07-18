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
// class Department {
//     name :string;
//     readonly id:string;
//     employees : string[];
//     constructor(n:string){ 
//         this.name = n;
//         this.employees = [];
//         this.id = Math.random().toString();
//     }
 
//     describe(this:Department):void{
//         console.log(`Department: ${this.name}`);
        // this.id = "HEllo"
//     }

//     addEmployee(emp:string):void {
//         this.employees.push(emp);
//     }

//     printEmployeeInformation():void {
//         console.log("Number of employees: " + this.employees.length);
//         console.log("Employees: " + this.employees.join(", "));
//         console.log("Department ID: " + this.id);
//     }

// }


// const obj1 = new Department("Accounting");
// obj1.id = "123"; // This will cause an error because id is readonly

// obj1.addEmployee("Max");
// obj1.addEmployee("Manu");

// obj1.printEmployeeInformation();



//? Inheritance
// class Department {

//     name : string;
//     employees : string[] = [];
//     constructor(name: string) {
//         this.name = name;
//         this.employees = [];
//     }

//     addEmployee(emp: string): void {
//         this.employees.push(emp);
//     }

//     printEmployeeInformation(): void {
//         console.log("Number of employees: " + this.employees.length);
//         console.log("Employees: " + this.employees.join(", "));
//     }

// }


// class ITDepartment extends Department{

//     constructor(public id: string, name: string) {
//         super(name); // Call the constructor of the parent class

//     }
    
//     addEmployee(emp: string): string {
//         return "Eh";
//     }
// }

// const it = new ITDepartment("d1", "IT");
// it.addEmployee("Max");
// it.addEmployee("Manu");
// it.printEmployeeInformation();
// console.log(it.addEmployee("Max"));

// it.printEmployeeInformation();



//Getter and Setter 

// class School {
//     private name:string = "";
//     private roll:number = 0;
//     subject : string[] = [];

//     constructor(){}

//     set setName(name:string){
//         this.name = name;
//     }
//     set setRoll(roll:number){
//         this.roll = roll;
//     }

//     set setSubject(subject:string){
//         this.subject.push(subject);
//     }

//     get getSubject(): string[] {
//         return this.subject;
//     }
//     get getName(): string {
//         return this.name;
//     }
//     get getRoll(): number {
//         return this.roll;
//     }
// }

// const school = new School();
// school.setName = "ABC School";
// school.setRoll = 101;
// school.setSubject = "Math";
// school.setSubject = "Science";
// console.log(school.getSubject); // Output: ["Math", "Science"]
// console.log(school.getName); // Output: "ABC School"
// console.log(school.getRoll); // Output: 101