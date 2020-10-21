var messageParagraph = document.getElementById('message');
// var value = window.prompt('Introdu o valoare:');
// var isOdd = false;

// if (value % 2 === 0) {
//   isOdd = false;
// } else {
//   isOdd = true;
// }

// // ternary operator
// var word = isOdd === true ? 'impara' : 'para';

// console.log(`Valoarea este ${value} si este ${word}.`);
/* var word = 'para';

if (value % 2 === 0) {
  word = 'para';
} else {
  word = 'impara';
} */

/* 3. Folosind metoda prompt() afiseaza in pagina
mesajul: “Numarul introdus este mai mic | mai mare
decat 20.” */
let inputNumber = window.prompt('Introdu un numar: ');

if (inputNumber === null || inputNumber === '' || isNaN(inputNumber)) {
  inputNumber = 3;
  console.warn(`Valoare introdusa nu este un numar.
  Se va folosi numarul ${inputNumber}.`);
}

let outputText;

if (inputNumber < 20) {
  outputText = 'mai mic decat';
} else if (inputNumber > 20) {
  outputText = 'mai mare decat';
} else {
  outputText = 'egal cu';
}

// var message = `Valoarea este ${value} si este ${word}`;
let message = `Numarul introdus este ${inputNumber} si este ${outputText}
 20.`;
messageParagraph.innerText = message;
// messageParagraph.textContent = message;
