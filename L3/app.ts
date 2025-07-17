// const person :object = {
//     firstName : "Saswat",
//     age : 21,
// }






//?UNION : In TS we can use union types to allow a variable to hold multiple types of values.
//Example: 

function combine (num1 : number | string , num2 :number | string) : number | string {
    let result : number | string ;
    if(typeof num1 === "number" && typeof num2 === "number"){
        result = num1 + num2; // This will return a number
    }
    else{
        result = num1.toString() + num2.toString(); // This will return a string
    }
    return result;
}

combine(10, 20); // This will return a number
combine("Patel", "Saswat");// This will return a string






//?Literals : In TS we can use literal types to allow a variable to hold a specific value.

// todo: 
function combine(num1 : number | string , num2 : number | string , conversionType : "as-number" | "as-text") : number | string {
    let result : number | string ;
    if(conversionType === "as-number"){
        result = +num1 + +num2; // This will return a number
    }
    else{
        result = num1.toString() + num2.toString(); // This will return a string
    }
    return result;
}

combine(10, 20, "as-number"); // This will return a number
combine("Patel", "Saswat", "as-text"); // This will return 






//? Type Alias : In TypeScript, we can create type aliases to give a name to a type.

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(num1: Combinable, num2: Combinable, conversionType: ConversionDescriptor): Combinable {
    let result: Combinable;
    if (conversionType === "as-number") {
        result = +num1 + +num2; // This will return a number
    } else {
        result = num1.toString() + num2.toString(); // This will return a string
    }
    return result;
}


type User = {
    name : string;
    age : number;
}

const person : User = {
    name: "Saswat",
    age: 21,
}