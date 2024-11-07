let nilaiA = 8;
let nilaiB = 10;

// perbandingan
let Agede5 = nilaiA > 5;
let Bcilik20 = nilaiB < 20;
let ApodoB = nilaiA === nilaiB;

let and = Agede5 && Bcilik20;
console.log("Apakah A lebih besar dari 5 dan lebih kecil dari 20?\n",and);

let or = Agede5 || ApodoB;
console.log("Apakah A lebih besar dari 5 atau sama dengan B?\n",or);

let not = !ApodoB;
console.log("Apakah A tidak sama dengan B?\n",not);

let combo = (Agede5 && Bcilik20) || !ApodoB;
console.log("Apakah A lebih besar dari 5 dan leboh kecil dari 20 atau keduanya tida sama?\n",combo);