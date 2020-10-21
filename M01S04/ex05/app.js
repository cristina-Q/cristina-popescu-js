/* 3. Folosind metoda prompt cere utilizatorului
numarul pentru care trebuie sa gasesti multipli si
afiseaza mesajul: “Acest numar este multiplu de x.”
Afla multiplii pentru acest numar intre 1 si 1000.

4. Folosind inca o metoda prompt, cere utilizatorului
si limita superioara pana la care sa numere bucla
si sa afiseze multipli. */

let testNumber = prompt('Introdu un numar: ');
let boundary = prompt('Introdu limita superioara: ');

if (testNumber === null || testNumber === '' || isNaN(testNumber)) {
  testNumber = 7;

  console.warn(`Nu ai introdus un numar. Se va folosi numarul ${testNumber}.`);
}

for (let i = 0; i <= boundary; i++) {
  console.log(i);

  if (i % testNumber !== 0) {
    continue;
  }

  console.log(`Acest numar este multiplu de ${testNumber}.`);
}
