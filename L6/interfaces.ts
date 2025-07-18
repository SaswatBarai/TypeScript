//?Interface : It represents the structure of a user object

// interface Person {
//     name: string;
//     age: number;
//     greet(text: string): void;

// }

// let user : Person;
// user = {
//     name: "John",
//     age: 25,
//     greet(text: string) {
//         console.log(`${text}, my name is ${this.name}`);
//     }
// };

// console.log(user)


interface Greetable {
    name : string;
    greet(text: string): void ;
} interface Greetable2 {
    name : string;
    roll : number;
    greet(text: string): void ;
}

class Person implements Greetable ,Greetable2 {
    name: string;
    roll: number;
    constructor(name: string) {
        this.name = name;
        this.roll = 0; // Default value for roll
    }

    greet(text: string): void {
        console.log(`${text}, my name is ${this.name}\nMy roll number is ${this.roll}`);
    }
}

const user= new Person("John");
user.roll = 101; // Setting roll number
user.greet("Hello");



//? Extending Interfaces

interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    bark(): void;
}

class Labrador implements Dog {
    name : string;
    age : number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    bark(): void {
        console.log(`${this.name} says Woof!`);
    }


}

const myDog : Labrador = new Labrador("Buddy", 3);
myDog.bark();

// type AddFun = (num1: number, num2: number) => number;

interface AddFun {
    (num1: number, num2: number): number;
}

let add = (num1: number, num2: number): number => {
    return num1 + num2;
}


//? Optional

interface User {
    name : string;
    age: number; // Optional property
}

class UserClass implements User {
    name : string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age || 0; // Default value if age is not provided
    }
}