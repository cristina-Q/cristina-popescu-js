// un obiect literal (template) din care poate deriva alte obiecte

let Car = {
  make: '',
  color: '',
  wheels: 0,
  speed: 0,
  topSpeed: 100,
  topReverseSpeed: -50,

  displaySpeed: function () {
    console.log(`
    Vehicolul ${this.make} se deplaseaza cu viteza ${this.speed}km/h
    `);
  },

  accelerate: function () {
    this.setSpeed(this.speed + 1);
  },

  decelerate: function () {
    this.setSpeed(this.speed - 1);
  },

  setSpeed: function (speed) {
    if (speed > this.topSpeed) {
      this.speed = this.topSpeed;
    } else if (speed < this.topReverseSpeed) {
      this.speed = this.topReverseSpeed;
    } else {
      this.speed = speed;
    }

    this.displaySpeed();
  },

  flashLights: function () {
    this.turnLightsOn();
    setTimeout(this.turnLightOff, 1000 * 3);
    // 10 zile * 24 h * 60m * 60s * 1000ms
  },
};

let audi = Object.create(Car);
audi.make = 'Audi';
audi.color = 'black';
audi.wheels = 4;
audi.speed = 0;
audi.test = 'test';
audi.topSpeed = 140;
audi.setSpeed(140);
audi.accelerate();
