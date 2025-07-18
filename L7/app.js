//? Type Guard
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1.toString() + num2.toString();
    }
    else {
        throw new Error('Invalid types for addition');
    }
}
console.log(add(20, 30)); // 50
console.log(add('Hello, ', 'World!')); // Hello, World!
