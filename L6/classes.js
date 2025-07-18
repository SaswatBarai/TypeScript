"use strict";
class Department {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    desscribe() {
        console.log(`Department: ${this.name}, Age: ${this.age}`);
    }
}
const obj1 = new Department("HR", 5);
obj1.desscribe();
const obj2 = {
    name: "Dummpo",
    desscribe: obj1.desscribe
};
console.log(obj2.desscribe());
