const isHujan = true; //kita bisa menambahkan nilai bool
console.log("Aku berangkat ke kampus");
if (isHujan) {
  console.log("Hari ini hujan, bawa payung!");
} else {
  console.log("Cuacanya cerah!");
}

//elif
let bahasa = "jawa";
let me = null; //variable kosong tp bernilai
if (bahasa === "jawa") {
  me = "kula";
} else if (bahasa === "indonesia") {
  me = "saya";
} else if (bahasa === "arab") {
  me = "ana";
}
console.log(me); //menampilkan ke console

//ternary operator atau conditional experessions
const ispremium = true; //truthy or falsy
const discount = ispremium ? 0.1 : 0; //evaluasi ? diakhiri dengan expression dan mengembalikan nilai
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`);
