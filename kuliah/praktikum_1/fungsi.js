/**
 * TODO:
 * 1. Buatlah fungsi bernama minimal dengan ketentuan berikut:
 *    - Menerima dua buah argumen number, a dan b.
 *    - Mengembalikan nilai terkecil antara a atau b.
 *    - Bila nilai keduanya sama, maka kembalikan dengan nilai a
 *
 *    contoh:
 *    minimal(1, 4) // output: 1
 *    minimal(3, 2) // output: 2
 *    minimal(3, 3) // output: 3
 *
 * 2. Buatlah sebuah function bernama findIndex yang menerima dua parameter, yaitu array dan number.
 *    Fungsi tersebut harus mengembalikan index dari angka yang sesuai pada array tersebut.
 *    Jika angka tidak ditemukan, maka kembalikan nilai -1.
 *
 *    contoh:
 *    findIndex([1, 2, 3, 4, 5], 3) // output: 2
 *    findIndex([1, 2, 3, 4, 5], 6) // output: -1
 *    findIndex([1, 2, 3, 4, 5], 5) // output: 4
 */

function minimal(a, b) {
  if (a > b) {
    return b;
  } else if (a < b) {
    return a;
  } else {
    return a;
  }
}

let a = 3;
let b = 3;
console.log(minimal(a, b));

function findIndex(array, number) {
  // Iterasi melalui setiap elemen array
  for (var i = 0; i < array.length; i++) {
    // Jika angka sesuai ditemukan, kembalikan indeksnya
    if (array[i] === number) {
      return i;
    }
  }
  // Jika angka tidak ditemukan, kembalikan nilai -1
  return -1;
}

const ab = [1, 2, 3, 4, 5];
const num = 6;
findIndex(ab, num);
