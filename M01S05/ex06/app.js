let person = {
  getName: () => {
    return 'Dragos Iordache';
  },
  getAge: () => {
    return 32;
  },
};

let accessor = (methodSuffix) => {
  let methodName = `get${methodSuffix}`;

  return person[methodName]();
};

console.log(accessor('Name'));

console.warn(`
  Folosind accesorul salveaza numele mic al
  persoanei intr-o variabila si foloseste-l
  in propoztia: “Eu sunt xxx.”
`);
let fullName = accessor('Name');
let name = fullName.split(' ')[0];
console.log(`Eu sunt ${name}.`);

console.warn(`
  Afiseaza diferenta de varsta dintre tine si persoana.
`);
console.log(`Diferenta este ${Math.abs(33 - accessor('Age'))}.`);

console.warn(`
3. Afiseaza anul de nastere al persoanei folosind anul curent.
`);

let currentyear = new Date().getFullYear();
console.log(currentyear - accessor('Age'));

console.warn(`
4. Afiseaza propozitia “Ma numesc xxx si am yy ani si m-am nascut acum aa ani.”
`);
console.log(
  `Ma numesc ${fullName} si am ${person[
    'getAge'
  ]()} si m-am nascut acum ${accessor('Age')}`,
);

console.warn(`
5. Folosind accesorul afiseaza numele persoanei.
`);
console.log(accessor('Name').split(' ')[1]);

console.warn(`
6. Afiseaza varsta persoanei.
`);
console.log(person.getAge());

console.warn(`
  7. Afiseaza anul de nastere al persoanei folosind anul curent.
`);
console.log(currentyear - person[`getAge`]());

console.warn(`
8. Afiseaza propozitia “Ma numesc xxx yyy si am aa ani!”
`);
console.log(` Ma numesc ${person[`getName`]()} si am ${person.getAge()}`);
