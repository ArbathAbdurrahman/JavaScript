function salam(nama) {
    if (nama != undefined) {
        return `Hallo, ${nama}!`;
    }
    return "Hallo, Pengunjung!"
}
console.log(salam());
console.log(salam("Budi"));