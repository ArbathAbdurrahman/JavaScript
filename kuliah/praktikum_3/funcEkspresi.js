const square = function (number) {
    return number * number;
};

console.log(square(4));

const factorial = function dac(n) {
    return n<2 ? 1 : n* factorial(n-1);
};
console.log(factorial(3));

function map(f,a) {
    const result = new Array(a.length);
    for (let i =0;i<a.length;i++) {
        result[i] = f(a[i]);
    }
    return result;
}
const cube = function(x) {
    return x*x*x;
};
const numbers = [0,1,2,5,10];
console.log(map(cube,numbers));

let myFunc;
num = 0
if (num === 0) {
    myFunc = function (theObject) {
        theObject.make = 'Toyota';
    };
}