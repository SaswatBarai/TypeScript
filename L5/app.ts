// let userInpuut : unknown ;
// let userInpuut : any;

// let userName : string;


// userInpuut = 10;
// userName = userInpuut;


//Never Return Type 

function generateError (message:string , code: number ):never {
    throw {message: message, errorCode: code};
}

const res = generateError("An error occurred!", 500);
console.log(res);