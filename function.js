// membuat fungsi
function penjumlahan(a, b) {
  return a + b; // isi dari fungsi
}
let z = 5;
let x = 3;
let hasil = penjumlahan(z, x); // memanggil fungsi
console.log(hasil);

// expresion
// kita bisa membuat fungsi pada variable
const greeting = function (name, language) {
  if (language === "English") {
    return "Good Morning " + name + "!";
  } else if (language === "French") {
    return "Bonjour " + name + "!";
  } else {
    return "Selamat Pagi " + name + "!";
  }
};

console.log(greeting("Arbath", "English"));

// fungsi berparameter objek
const user = {
  id: 24,
  displayName: "Arbath",
  fullName: "Arbath Abdurrahman",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// default parameter
// = 2 sebagai default parameter
function exponentsFormula(baseNumber, exponent = 2) {
  const result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

// rest parameter yang berkaitan dengan spread Operator
function jumlah(...numbers) {
  // fungsi ini menjumlahkan semua oarameter menggunakan loop
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(jumlah(1, 2, 3, 4, 5));
