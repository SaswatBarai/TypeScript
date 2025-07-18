//Generics

const fruits: Array<string> = ['apple', 'banana', 'cherry'];

fruits.push('orange');


type Person = {
    name: string;
    age: number;

}

type Boy = {
    name: string;
    age: number;
    hobbies: string[];
}

const peronn: Array<Boy | Person> = [
    { name: 'John', age: 30 , hobbies: ['reading', 'gaming'] },
    { name: 'Jane', age: 25 }
]

function merge<T,U> (objA: T, objB : U) {
    return {...objA,...objB}
}


//2 Generics with constraints

function craeteObject <T extends string, U extends number , V extends boolean> (objA: T, objB: U, objC: V) :{name: T, age: U, isActive: V} {
    return {name: objA, age: objB, isActive: objC}
}

const obj = craeteObject('John', 30, true);
console.log(obj);



//3 Generics Interfaces

interface Box <T> {
    value : T;
    name : string;
}

const box1: Box<number> = {
    value: 10,
    name: 'Number Box'
};


//4 Generics Defalut 

interface BoxDefault <T = string> {
    data : T;
    description: string;
}

const res : BoxDefault = {
    data: 'Default String',
    description: 'This is a default box'
}


type Person2 = {
    name: string;
    age: number;
}

const response : BoxDefault<Person2> = {
    data: { name: 'Alice', age: 28 },
    description: 'This is a person box'
}


//5 Generics with multiple types
function combine<T extends string | number, U extends string | number>(a: T, b
: U): string | number {
    if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    } else {
        throw new Error('Invalid types for combination');
    }
}


//6 Generics Classes

class DataStoare <T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    getItems(): T[] {
        return this.data;
    }
}

const numberStore = new DataStoare<number>();
numberStore.addItem(10);
numberStore.addItem(20);
const stringStore = new DataStoare<string>();
stringStore.addItem('Hello');
stringStore.addItem('World');
console.log(numberStore.getItems()); // [10, 20]
console.log(stringStore.getItems()); // ['Hello', 'World']


//7 Generics with Array 
function getFirst<T> (arr: T[]): T {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    }
    return arr[0];
}


//8 Generics with keyOf
const perosm = {
    name : "Saswat"
}

// function getProperty (obj : object , key : string){
//     return obj[key]
// }

// const res1 = getProperty({}, 'name');

// console.log(res1)//undefined

function getProperty <T extends object , K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const res1 = getProperty(perosm,"name");
console.log(res1)