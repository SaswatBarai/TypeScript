//Object , Array , Tuple , Enum 
// console.log("Lets learn project.....")

//! const person = {
//!     fisrtName : "Saswat",
//!     age :21
//! }

//! console.log(person.lastName)//It will give error because lastName is not defined in person object but in JS it will not give error and it will print undefined


// const person: {
//     firstName: string;
//     age: number;
//     xyz: {
//         address: string;
//     };
// } = {
//     firstName: "Saswat",
//     age: 21,
//     xyz: {
//         address: "123 Main St"
//     }
// }

// console.log(person.firstName)


// const person: {
//     firstName: string;
//     age: number;
//     xyz: {
//         address: string;
//     };
//     // skills : string [];
// } = {
//     firstName: "Saswat",
//     age: 21,
//     xyz: {
//         address: "123 Main St"
//     },

    // skills: ["js","ts",69] // skills is an array of strings
// }


// let fav : string[] = ["js","ts","c++"] // fav is an array of strings
// let fav2 :any[] = ["js", 69, true] // fav2 is an array of any type we avoid using any type as much as possible because it defeats the purpose of TypeScript's type safety


// console.log(person.firstName)





//!Tuple : // A tuple is a special type of array that can hold a fixed number of elements with different types

// const person2 : {
//     name : string;
//     age : number;
//     skills : string[],
//     product : [number,string,string] // product is a tuple with a number and a string (index -> 0) = number, (index -> 1) = string
// } = {
//     name: "Saswat",
//     age: 21,
//     skills: ["js", "ts", "c++"],
//     product : [69, "laptop","phone"]
// }

// person2.product[0] = 100; // This is allowed because the first element of the tuple is a number

//!person2.product[1] = 23 // This will give an error because the second element of the tuple is a string, not a number



//! Enum : // An enum is a way to define a set of named constants


enum Role {
   AUTHOR,
    ADMIN,
    GUEST
}

const person = {
    name: "Saswat",
    age: 21,
    skills: ["js", "ts", "c++"],
    role: Role.AUTHOR
}

if(person.role === Role.AUTHOR) {
    console.log("You are an author");
}
