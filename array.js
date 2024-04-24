let myArray = ["ucup", "subroto", 170, 60, true];
console.log(myArray);
console.log(myArray[1]); // memanggil index ke 1 yaitu "subroto"
console.log("panjang dari myArray adalah " + myArray.length, "baris");

// menambahkan data pada array
myArray.push("pelajar");
console.log(myArray);
console.log(myArray.length);
// mengeluarkan data di index terakhir
myArray.pop();
console.log(myArray);
// menambahkan data pada index pertama
myArray.unshift("bambang");
console.log(myArray);
// mengeluarkan data di baris pertama
myArray.shift();
console.log(myArray);
console.log(myArray.length);
// menghapus index pd array
delete myArray[3];
console.log(myArray);
console.log(myArray.length);
// meghapus index sekaligus elementnya
myArray.splice(3, 2); // menghapus index ke 3 sampai 4
console.log(myArray);
console.log(myArray.length);
// splice() juga bisa digunakan untuk menambahkan data pd array
myArray.splice(2, 1, "ahmad"); // menghapus 1 index setelah index ke 1 dan menambahakan 1 data setelah index ke 1
console.log(myArray);
console.log(myArray.length);
