var nilai = ['a', 'b', 'c', 'd'];
console.log(nilai);

var nilai2 = [1,2,3,4];
console.log(nilai2);

var nilai3 = [...nilai, 'e', 'f'];
console.log(nilai3);

var nilai4 = [0, ...nilai2, 5, 6];
console.log(nilai4);

var nilai5 = [...nilai2, ...nilai3];
console.log(nilai5);