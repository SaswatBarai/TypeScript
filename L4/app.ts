function add( num1 : number , num2 : number) : number {
    return num1 + num2;
}

add(20, 30);

function greet(name : string){
    console.log(`Hello, ${name}!`);
}


// let combineFunction : Function;

// //combineFunction = add;


// let combineFunction : (num1 : number , num2 : number) => number;
// combineFunction = add;
// const n1 : number = 20;
// const n2 : number = 30;
// const ans : number = combineFunction(n1, n2);
// console.log(ans);



type CB = (n:number) => void

function addHandle (num1: number,num2:number , cb : void) {
    const result = num1 + num2;
    cb(result);
}

addHandle(10,20 , (result : number)=> {
    console.log(result);
})