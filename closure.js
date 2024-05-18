// closure merupakan fungsi bersarang yang hanya dapat mengakses variable didalam fungsi induk
// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private.
function init() {
  const name = "Arbath Abdurrahman"; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet();
}

init();

// ini digunakan untuk private method
// tanpa closure
let counter = 0;

const add = () => {
  return ++counter;
};

console.log(add());
console.log(add());
counter = 23;
console.log(add());

// menggunakan closure digunakan untuk menghidari bug
const addd = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

const addCounterr = addd();

console.log(addCounterr());
console.log(addCounterr());
console.log(addCounterr());
