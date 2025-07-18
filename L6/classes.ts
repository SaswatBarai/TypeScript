class Department {
    name: string;
    age: number;

    constructor(name : string,age : number) {
        this.name = name;
        this.age = age;
    }

    desscribe (this:Department):void {
        console.log(`Department: ${this.name}, Age: ${this.age}`);
    }
}

const obj1 = new Department("HR", 5);

obj1.desscribe();

const obj2 = {
    name:"Dummpo",
    desscribe : obj1.desscribe
}
console.log(obj2.desscribe())