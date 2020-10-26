let i = 1;

do {
  console.log(i);

  if (i === 50) {
    break;
  }

  // if ( i <= 50) {
  //   console.log(i);
  // }

  i++;
} while (i < 100);

console.warn(`4. Modifica exemplul astfel incat bucla sa
numere de la 1 la 52`);

i = 1;

do {
  console.log(i);
  i++;
} while (i <= 52);

console.warn(`5. Modifica exemplul astfel incat bucla
sa numere de la 1 la 51.`);

i = 1;

do {
  console.log(i);
  i++;
} while (i < 52);

console.warn(`6. Folosind keywordul break opreste bucla
atunci cand numarul este egal cu 12 (dar afiseaza-l)`);

i = 1;

do {
  console.log(i);

  if (i === 12) {
    break;
  }

  i++;
} while (i < 52);

console.warn(`7. Folosind keywordul continue afiseaza doar
numerele impare intre 8 si 32.`);

i = 8 - 1;

do {
  i++;
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
} while (i < 32);

console.warn(`8. Folosind metoda prompt de trei ori cere
utilizatorului un numar, o limita inferioara si o limita
superioara apoi afiseaza toti multiplii de numar intre
limita inferioara si limita superioara introduse.`);

let inputNumber;
let lowerLimit;
let upperLimit;

do {
  inputNumber = prompt(`Calculeaza multiplii pentru numarul:`);
} while (inputNumber === null || inputNumber === '' || isNaN(inputNumber));

do {
  lowerLimit = prompt(`Introdu un numar -> limita inferioara`);
} while (lowerLimit === null || lowerLimit === '' || isNaN(lowerLimit));

do {
  upperLimit = prompt(`Introdu un numar -> limita superioara`);
} while (upperLimit === null || upperLimit === '' || isNaN(upperLimit));

inputNumber = parseInt(inputNumber);
lowerLimit = parseInt(lowerLimit);
upperLimit = parseInt(upperLimit);

console.log(`Multiplu de: ${inputNumber}
Limita inferioara: ${lowerLimit}
Limita superioara: ${upperLimit}`);

let multiples = [];
let index = lowerLimit;

if (upperLimit < lowerLimit) {
  console.log(`Numerele alese pentru limite nu fac sens. Alege alte limite.`);
} else if (inputNumber > upperLimit) {
  console.log(`Numarul nu are multiplii pentru intervalul ales.`);
} else {
  do {
    if (index % inputNumber === 0 && index !== 0) {
      multiples.push(index);
    }
    index++;
  } while (index <= upperLimit);

  console.log(`Multiplii numarului ${inputNumber}
in intervalul ${lowerLimit} si ${upperLimit} sunt: ${multiples}`);
}
