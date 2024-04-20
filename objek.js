// obajek yg berisi key dan value (properti)
const user = {
  firstName: "Ucup",
  lastName: "Surotong",
  age: 15,
  ["status"]: "Pelajar", // bisa juga menggunakan [" "]
};
console.log(`Hallo, nama saya ${user.firstName} ${user.lastName} seorang ${user["status"]} berumur ${user.age} tahun`);

// mengedit objek
user.firstName = "Gatot";
user.lastName = "Subroto";
user["age"] = 22; // bisa juga menggunakan []
user.status = "Pekerja";
console.log(`Hallo, nama saya ${user.firstName} ${user.lastName} seorang ${user["status"]} berumur ${user.age} tahun`);

//menghapus objek
delete user.lastName;
console.log(user);
