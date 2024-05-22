/* Di materi OOP sebelumnya dijelaskan secara singkat apa itu property dan methods
maka disini akan dijelaskan secara detail tentang property*/

// Data Property
class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    // Set a random chassis number
    this.chassisNumber = `${brand}-${Math.floor(Math.random() * 1000) + 1}`;
  }
}

const car1 = new Car("BMW", "red", 200);
const car2 = new Car("Audi", "blue", 220);
const car3 = new Car("BMW", "black", 250);

console.log(car1);
console.log(car2);
console.log(car3);
// Property tipe ini dapat langsung dirubah nilainya dan chassisNumber tidak terlindungi

// Accessor Property menggunakan getter dan setter
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  // getter
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  // setter
  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const user = new User("John", "Doe");
console.log(user);
console.log(user.fullName);

user.fullName = "Fulan Fulanah";
console.log(user);
console.log(user.fullName);

// penggunaan accessor property
class Carr {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumberr = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumberr() {
    return this._chassisNumberr;
  }

  set chassisNumberr(chassisNumberr) {
    console.log("you are not allowed to change the chassis number"); // munculkan peringantan ketika user ingin merubah data
  }
}
const carr = new Carr("BMW", "red", 200);
console.log(car.chassisNumberr);
car.chassisNumberr = "BMW-1";
console.log(car.chassisNumberr);
// Property tipe ini kita dapat mengontrol variabel object mana yang nilainya dapat dirubah dan chassisNumber terlindungi
