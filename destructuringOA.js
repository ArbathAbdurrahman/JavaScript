//digunakan dalam mengelola data di JavaScript. JSON (JavaScript Object Notation)
// berupa objek yg berada di dalam array

let destructuring = [
  {
    id: 14,
    title: "Belajar Fundamental Aplikasi Android",
    author: "Google ATP",
  },
  {
    id: 51,
    title: "Belajar Membuat Aplikasi Android untuk Pemula",
    author: "Google ATP",
  },
  {
    id: 123,
    title: "Belajar Dasar Pemrograman Web",
    author: "Dicoding Indonesia",
  },
  {
    id: 163,
    title: "Belajar Fundamental Front-End Web Development",
    author: "Dicoding Indonesia",
  },
];

console.log(destructuring);

// destructuring Objek
const profile = {
  firstName: "Ucup",
  lastName: "Supriyadi",
  age: 20,
};

const { firstName, lastName, age } = profile;
console.log(firstName, lastName, age);
//  assignment
let pirstName = "Dimas";
let umur = 20;

// menginisialisasi nilai baru melalui destructuring object
({ pirstName, umur } = profile);
console.log(pirstName);
console.log(umur);

//  mengatasi undefined
const profilee = {
  awalNameName: "John",
  lastName: "Doe",
  usia: 18,
};
const { awalName, usia, isMale = false } = profilee;

console.log(awalName);
console.log(usia);
console.log(isMale);

// destructuring Array
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

// memanggil array tertentu
const [, , tirdFood] = favorites;

console.log(tirdFood);

// assignment
let myFood = "Ice Cream";
let herFood = "Noodles";

[myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);
