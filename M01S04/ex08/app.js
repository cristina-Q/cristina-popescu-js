let i = 1;

while (i < 100) {
  console.log(i);

  if (i === 50) {
    break;
  }

  i++;
  // i = i + 1;
}

console.warn(`5. Modifica exemplul astfel incat bucla sa
numere de la 1 la 67.`);
i = 1;
while (i <= 67) {
  console.log(i);
  i++;
}

console.warn(`6. Modifica exemplul astfel incat bucla sa
numere de la 1 la 66.`);
i = 1;
while (i < 67) {
  console.log(i);
  i++;
}

console.warn(`7. Folosind keywordul break opreste bucla
atunci cand numarul este egal cu 12 (dar afiseaza-l).`);
i = 1;
while (i < 67) {
  console.log(i);

  if (i === 12) {
    console.log(`and out 🚪`);
    break;
  }

  i++;
}

console.warn(`8. Folosind keywordul continue afiseaza
doar numerele pare intre 1 si 32 (inclusiv).`);

i = 1 - 1;
while (i <= 32) {
  i++;
  if (i % 2 !== 0) {
    continue;
  }

  console.log(i);
}

console.warn(`9. Folosind metoda prompt de doua ori
cere utilizatorului un numar si o limita superioara apoi
afiseaza toti multiplii de numar intre 5 si limita
superioara introduse.`);

let inputNumber;
let lowerLimit = 5;
let upperLimit;

inputNumber = prompt(`Introdu un numar:`);
while (inputNumber === null || inputNumber === '' || isNaN(inputNumber)) {
  inputNumber = prompt(`Pentru a continua este necesar sa introduci un numar:`);
}

upperLimit = prompt(`Introdu o limita superioara:`);
while (upperLimit === null || upperLimit === '' || isNaN(upperLimit)) {
  upperLimit = prompt(`Pentru a continua este necesar sa introduci un numar:`);
}

upperLimit = parseInt(upperLimit);
inputNumber = parseInt(inputNumber);

let multiples = [];
let index = lowerLimit;

if (upperLimit < lowerLimit) {
  console.log(
    `Limita inferioara este setata la ${lowerLimit}. Alegeti un numar
    mai mare de ${lowerLimit} pentru limita superioara`,
  );
} else if (inputNumber > upperLimit) {
  console.log(`Numarul nu are multiplii pentru intervalul ales.`);
} else {
  while (index <= upperLimit) {
    if (index % inputNumber === 0) {
      multiples.push(index);
    }

    index++;
  }
}

console.log(`Multiplii numarului ${inputNumber}
in intervalul ${lowerLimit} si ${upperLimit} sunt: ${multiples}`);
