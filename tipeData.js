//undefined
let x; //variabele yg tidak memiliki nilai
console.log(typeof x); //mengembalikan tipe data dalam bentuk teks

//null
let sementara = null; // variable kosong tapi memiliki nilai
console.log(sementara);

//numbers
let a = 99;
console.log(typeof a);
//tipe data “Number” hanya mencakup nilai dari -(253 - 1) hingga (253 - 1).
//bigint
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(myInt);
/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

//string
let b = "javaScript";
console.log("tipe data b adalah", typeof b);
const setring = "'Backslash' sebelum tanda petik akan memberitahukan interpreter bahwa \"itu hanyalah tanda petik\" dan tidak boleh ditafsirkan sebagai pembatas string";
console.log(setring);
console.log("Windows path: C:\\Program Files\\MyProject"); //mengabaikan simbol lain
// string interpolation
const myName = "Arbath";
console.log(`Hello, my name is ${myName}`); //ingat ini bukan menggunakan (') tapi (`) dibawah tombol esc

//boolean
let k = true;
let l = false;
console.log(k);
console.log(l);

//symbol
const id = Symbol("id");
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id);
console.log(id1 == id2); // menanyakan apakah id1 sama dengan id2
