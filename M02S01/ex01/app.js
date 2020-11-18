// alta modalitate de a genera obiecte:

class Car {
  //este o functie
  topReverseSpeed = -50; //add property
  areLightsOn = false;
  isTrunkOpen = false;
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.wheels = wheels;
    this.speed = speed;

    this.topSpeed = 160; //add property
  }

  accelerate() {
    this.speed++;
    // this.speed = this.speed + 1;
    //this.speed +=1;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(this.speed);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;

      return;
    }

    if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;

      return;
    }

    this.speed = speed;
  }

  openTrunk() {
    if (this.isTrunkOpen) {
      return console.log(`The trunk has already been opened!`);
    } else {
      this.isTrunkOpen = true;
      return console.log(`The trunk is now open!`);
    }
  }

  closeTrunk() {
    if (!this.isTrunkOpen) {
      return console.log(`The trunk has already been closed!`);
    } else {
      this.isTrunkOpen = false;
      return console.log(`The trunk is now close!`);
    }
  }

  turnLightsOn() {
    if (this.areLightsOn) {
      return console.log(`The Lights has already been on!`);
    } else {
      this.areLightsOn = true;
      return console.log(`The Lights are on now!`);
    }
  }

  turnLightsOff() {
    if (!this.areLightsOn) {
      return console.log(`The Lights has already been off`);
    } else {
      this.areLightsOn = false;
      return console.log(`The Lights are off now!`);
    }
  }

  flashLights() {
    window.setTimeout(this.turnLightsOn, 2000);
    window.setTimeout(this.turnLightsOff, 3000);
  }
}

let audi = new Car('Audi', 'black', 4, 50); // o instanta dintr-o clasa de masina

console.warn(`Instantiaza o alta masina
  (Opel, red, cu 4 roti si viteza 3). O poti salva intr-o variabila numita opel.
  `);
let opel = new Car('Opel', 'red', 4, 3);

console.warn(`
  Adauga o metoda numita stop() care sa faca proprietatea speed 0, apoi afiseaza viteza.
`);
console.warn(`
Adauga  o metoda numita setSpeed() care sa poata primi un parametru fix pentru viteza.
Metoda trebuie sa verifice ca nu se depasesc limitele inferioare si superioare, caz in
care se folosesc proprietatile topSpeed si topReverseSpeed
`);

const cars = [audi, opel];

// 6. Adauga o proprietate booleana numita isTrunkOpen si asigneaza-i valoarea false.
// 7. Adauga metode numite openTrunk() si closeTrunk() care sa seteze proprietatea isTrunkOpen pe
// true, respectiv false.
// 8. Adauga o proprietate booleana numita areLightsOn si asigneaza-i valoarea false.
// 9. Adauga metode numite turnLightsOn() si turnLightsOff() care sa manipuleze valoarea.
// 10. Adauga o metoda numita flashLights() care sa apeleze cele doua metode in succesiune, folosind
// metoda window.setTimeout().
// 11. Adauga cele doua variabile (opel si audi) intr-un array numit cars. (var cars = [opel, audi])
// 12. Ruleaza o bucla prin forEach si afiseaza propozitiile (pentru fiecare din masini)
// a. “Masina era marca make si se deplasa cu speed km/h”
// b. In fiecare iteratie, decelereaza masina cu 5 unitati, apoi afiseaza: “Viteza noua este speed
// km/h” (setSpeed(car.speed - 5))

cars.forEach(function (car) {
  console.log(
    `Masina era marca ${car.make} si se deplasa cu ${car.speed} km/h`,
  );
  car.speed -= 5;
  console.log(`Viteza noua este ${car.speed} km/h`);
});
