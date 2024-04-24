const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites[0], favorites[1], favorites[2], favorites[3]); // Penulisan pada array biasa
console.log(...favorites); // Spread operator (...) menghilangkan " " pada nilai Array

// spread operator juga bisa digunakan untuk menggabungkan beberap array
const others = ["Cake", "Pie", "Donut"];
const all = [favorites, others]; // cara biasa
console.log(all); // tidak digabungkan tapi array kedua di print dibawah array pertama
const allspreand = { ...favorites, ...others }; // menggunakan spread operator
console.log(allspreand); // menggabungkan 2 array
