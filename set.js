/*Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. 
Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi.*/

const numberSet = new Set([1, 2, 3, 2, 1]);

console.log(numberSet); //set membuang angka yang sama
numberSet.add(4); // menambahkan nilai
numberSet.add(5); // menambahkan nilai
numberSet.delete(1); // menghapus niali
console.log(numberSet);
