// Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya.
// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// function expression
const sayName = function (name) {
  console.log(`Nama saya ${name}`);
};

// arrow function expresion
const sayNama = (nama, belakang) => {
  console.log(`Nama Saya ${nama + belakang}`);
};
// bisa juga mengosongkan paramater
const halo = () => {
  console.log("Ohayo Sekai Good Morning Lord");
};
// bisa juga menulis dengan 1 baris
const hae = () => console.log("Sugeng Enjang Mas");
// bisa juga mengembalikan nilai tanpa return
const multiply = (a, b) => a * b; // hanya efektif untuk one linier

const namaku = "Arbath";
const belakan = "Abdurrahman";
sayNama(namaku, belakan);

halo();
hae();
console.log(multiply(5, 5));

// Variable Scope
// global variable, dapat diakses pada parent() dan child()
const a = "a";

function parent() {
  // local variable, dapat diakses pada parent() dan child(), tetapi tidak dapat diakses di luar dari fungsi tersebut.
  const b = "b";

  function child() {
    // local variable, dapat diakses hanya pada fungsi child().
    const c = "c";
  }
}
