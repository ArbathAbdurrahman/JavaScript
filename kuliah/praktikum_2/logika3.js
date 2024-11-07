function alert(kalimat) {
    console.log(kalimat);
}

var bar = true;
var foo = bar && alert("Hallo Sayang");

var bar = false;
var foo = bar && alert("Hallo Sayang");