//? Type Guard

type combineable = string | number;
type Numeric = number | boolean;
type Universal = combineable & Numeric;

function add(num1 : combineable , num2 : combineable) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.toString() + num2.toString();
    } else {
        throw new Error('Invalid types for addition');
    }
}

console.log(add(20, 30)); // 50
console.log(add('Hello, ', 'World!')); // Hello, World!

type Admin = {
    name : string;
    privilages : string[];
}

type Employee = {
    name : string;
    startDate : Date;
}

type ElevatedEmployee = Admin & Employee;

type UnknownEmployee = Admin | Employee;


const emp1 : ElevatedEmployee = {
    name: 'John',
    privilages: ['create-server'],
    startDate: new Date()
}

const emp2 : UnknownEmployee = {
    name: 'Jane',
    startDate: new Date()
}


// const printEmployeeInformation = (emp: UnknownEmployee) => {
//     console.log("Name:" , emp.name);
//     console.log("privileges:",emp.privilages )
// }


const printEmployeeInformation = (emp: UnknownEmployee) => {

    //use in keyword to check if the property exists
    
    if ( "privilages" in emp) { // we will here use "in" keyword to check if the property exists
        console.log("Privileges:", emp.privilages);
    }

    if("startDate" in emp) {
        console.log("Start Date:", emp.startDate);
    }
}


printEmployeeInformation(emp1);
printEmployeeInformation(emp2);


class Animal {

    Tell() : void {
        console.log("Animal speaks");
    }

    Eat(): void {
        console.log("Eating by Animal");
    }
}

class Human {
    Tell() : void {
        console.log("Human speaks");
    }
    Eating() : void {
        console.log("Eating by Human");
    }
}

type species = Animal | Human;

const v1 = new Animal();
const v2 = new Human();

function useSpecies (spc : species) {
    // spc.Tell();
    // if (spc instanceof Animal) {
    //     spc.Eat();
    // } else if (spc instanceof Human) {
    //     spc.Eating();
    // }

    if ('Eat' in spc) {
        spc.Eat();
    } else if ('Eating' in spc) {
        spc.Eating();
    }

}



//Type Casting 

const userInputElement = <HTMLInputElement>document.getElementById('user-input');

if (userInputElement) {
    userInputElement.value = 'Hello, TypeScript!';
}