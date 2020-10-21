/* 1. Creeaza un obiect numit person
2. Obiectul sa contina urmatoarele proprietati:
firstName, lastName, email, birthYear, pets, zipCode.
3. Proprietatea pets sa contina un array de obiecte cu trei pozitii.
4. Obiectele din pets sa contina urmatoarele proprietati:
name, species, age.
*/

let person = {
  firstName: 'Sue',
  lastName: 'Smith',
  email: 'suesmith@yandex.com',
  birthYear: 1998,
  pets: [
    { name: 'Pet1', species: 'fish', age: 132 },
    { name: 'Pet2', species: 'mole', age: 8 },
    { name: 'Pet3', species: 'snail', age: 1 },
  ],
  zipCode: 064125,
};

// 6. Afiseaza propozitia: “Numele meu este: xxx si yyy si am x animale”.
// Nu uita de proprietatea length a arrayului pets.
console.log(
  `Numele meu este: ${person.firstName} si ${person.lastName} si
  am ${person.pets.length} animale`,
);

// 7. Afiseaza propozitia: “Am acelasi email din copilarie: xxx”.
console.log(`Am acelasi email din copilarie: ${person.email}`);

// 8. Afiseaza propozitia: “Unul din cele x animale ale
// mele este species si are age ani.”
let random = Math.floor(Math.random() * 3);
console.log(`Unul din cele ${person.pets.length} animale ale mele
  este ${person.pets[random].species} si
  are ${person.pets[random].age} ani.`);

// 9. Calculeaza si afiseaza (folosind anul curent) anul de
// nastere al animalului de pe pozitia 2.
let dt = new Date();
let currentYear = dt.getFullYear();

console.log(currentYear - person.pets[2].age);

// 10. Calculeaza si salveaza in variabila difference diferenta
// de ani dintre persoana si animalul de pe pozitia 0.
// Foloseste anul curent.
let difference = Math.abs(currentYear - person.birthYear - person.pets[0].age);

// 11. Salveaza numele animalului de pe
// pozitia 0 intr-o variabila numita petName.
petName = person.pets[0].name;

// 12. Afiseaza propozitia: “Intre firstName
// si petName este o diferenta de difference ani”.
console.log(
  `Intre ${person.firstName} si ${petName} este
  o diferenta de ${difference} ani.`,
);

// 13. In documentul HTML creeaza o lista neordonata
// <ul> cu 4 elemente goale <li>.
// 14. Fiecare li sa aiba un id: prop01, prop02… etc
// 15. Folosind metoda document.getElementById() afiseaza
// urmatoarele 4 afirmatii despre obiectul person.

const elem01 = document.getElementById('prop01');
const elem02 = document.getElementById('prop02');
const elem03 = document.getElementById('prop03');
const elem04 = document.getElementById('prop04');

// 16. Afiseaza propozitia “ firstName, pet1, pet2, pet3
// locuiesc toti in aceeasi casa”
// (folosind bracket notation pe arrayul pets)
let prop01 = `${person.firstName}, ${person.pets[0]['name']},
  ${person.pets[1]['name']}, ${person.pets[2]['name']}
  locuiesc toti in aceeasi casa.`;

elem01.innerText = prop01;

// 17. Calculeaza si afiseaza diferenta de varsta dintre
// animalul de pe pozitia 0 si cel de pe pozitia 2
const diff = person['pets'][0]['age'] - person['pets'][2]['age'];
let prop02 = `${diff} ani, diferenta de varsta.`;

elem02.innerText = prop02;

// 18. Afiseaza propozitia: “Ma numesc xxx yyy, m-am
// nascut in birthYear si codul meu postal este: zipCode”
let prop03 = `Ma numesc ${person.firstName} ${person.lastName}, m-am
  nascut in ${person.birthYear} si codul meu postal este: ${person.zipCode}.`;

elem03.innerText = prop03;

// 19. Afiseaza propozitia: “Animalele mele s-au nascut
// in xxxx, xxx, respectiv xxx.” Foloseste anul curent
// pentru a efectua scaderea.
let pet1YearBirth = currentYear - person.pets[0].age;
let pet2YearBirth = currentYear - person.pets[1].age;
let pet3YearBirth = currentYear - person.pets[2].age;

let prop4 = `Animalele mele s-au nascut
in ${pet1YearBirth}, ${pet2YearBirth}, respectiv ${pet3YearBirth}.`;

elem04.innerText = prop4;
