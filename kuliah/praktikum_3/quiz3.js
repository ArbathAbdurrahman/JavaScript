const faktorial = function dac(n) {
    return n<2 ? 1 : n* faktorial(n-1);
};
console.log(faktorial(5));