/*Map adalah tipe data yang menyimpan koleksi data 
dengan format key-value layaknya Object. 
Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, 
dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.*/

const myMap = new Map([
  ["1", "key-String"], //element pertama adalah key dan elemen kedua adalah value
  [1, "key-number"],
  [true, true],
]);
console.log(myMap);

// cara menggunakan map
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);
console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

//weak map
/* Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, 
maka referensi ke memorinya akan dihapus.*/
const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: "Jonas" };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus

// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 10000);
