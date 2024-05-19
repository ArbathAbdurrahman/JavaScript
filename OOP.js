// OOP tedriri dari 2 unsur yaitu properties dan methods
const car = {
  // Properties
  merk: "Lambo",
  warna: "Merah",
  speed: 300,
  seri: 75375927,

  // Methods
  drive: () => {
    console.console.log("Driving");
  },
  reverse: () => {
    console.log("reversering");
  },
  turn: () => {
    console.log("turning");
  },
};

console.log(car.merk);
console.log(car.warna);
console.log(car.speed);
console.log(car.seri);
car.drive();
car.reverse();
car.turn();
