let person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: {
    html: true,
    css: true,
    javaScript: true,
    node: false,
    react: false,
  },
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  },
};

console.warn(`
  Folosind Object.keys() pe proprietatea skills,
  afiseaza abilitatile persoanei daca acestea sunt true.
`);
Object.keys(person.skills).forEach((skill) => {
  if (person.skills[skill] === true) {
    console.log(skill);
  }
});

console.warn(`
  Prin aceeasi metoda, afiseaza o lista
  inversata cu numele complet al prietenilor.
`);
Object.keys(person.friends)
  .reverse()
  .forEach((friend) => {
    let friendObject = person.friends[friend];

    console.log(`${friendObject.name} ${friendObject.surname}`);
  });

console.warn(`
  Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.”
  folosind Object.keys()
`);
let friendsKeysArray = Object.keys(person.friends);
let sentence = 'Prietenii mei sunt ';
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let punctuation = ', ';

  if (i === friendsKeysArray.length - 1) {
    punctuation = '.';
  }

  if (i === friendsKeysArray.length - 2) {
    punctuation = ' si ';
  }

  sentence += `${friendObject.name}${punctuation}`;
  // sentence = sentence +
  // sentence = `${sentence} ...`
}
console.log(sentence);

console.warn(`
  Folosind bucla, afiseaza mai multe propozitii
  (cate una per console.log()) care sa afiseze:
  “Larry este mai mare|mic decat Dragos.” etc…
`);
for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];
  let sentenceFragment =
    friendObject.age - person.age >= 0 ? 'mai mare' : 'mai mic';

  console.log(
    `${friendObject.name} este ${sentenceFragment} decat ${person.name}`,
  );
}

console.warn(`5. Folosind Object.keys() pe proprietatea skills,
afiseaza abilitatile persoanei.`);
Object.keys(person.skills).forEach((skill) => {
  console.log(skill);
});

console.warn(`6. Prin aceeasi metoda, afiseaza o lista cu
numele complet al prietenilor.`);
Object.keys(person.friends).forEach((friend) => {
  let friendObject = person.friends[friend];

  console.log(`${friendObject.name} ${friendObject.surname}`);
});

console.warn(`7. Afiseaza propozitia: “Prietenii mei sunt
Larry Larryson, Steven Stevenson si Carol Carolson.”
folosind Object.keys()`);

sentence = `Prietenii mei sunt `;

friendsKeysArray.forEach((friend, i, friends) => {
  let friendObject = person.friends[friend];
  let punctuation = ``;

  i === friends.length - 1
    ? (punctuation = `.`)
    : i === friends.length - 2
    ? (punctuation = ` si`)
    : (punctuation = `,`);

  sentence += ` ${friendObject['name']} ${friendObject['surname']}${punctuation}`;
});

console.log(sentence);

console.warn(`8. Folosind bucla, afiseaza mai multe propozitii
(cate una per console.log()) care sa afiseze: “Larry are
xx ani. Steven are …”`);

for (let i = 0; i < friendsKeysArray.length; i++) {
  let friendObject = person.friends[friendsKeysArray[i]];

  console.log(`${friendObject.name} are ${friendObject.age} ani.`);
}

console.warn(`10. Folosind fisierele de la exercitiul 06,
si doua bucle for imbricate (nested) afiseaza diferenta de
varsta dintre fiecare membru al arrayului friends si ceilalti membri.`);

let personEx06 = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

for (let i = 0; i < personEx06.friends.length; i++) {
  let friend1 = personEx06.friends[i];
  let ageDiff = Math.abs(friend1.age - personEx06.age);

  console.log(`
Intre ${friend1.name} si ${personEx06.name} este o diferenta de ${ageDiff} ani.
  `);

  for (let j = 0; j < personEx06.friends.length; j++) {
    let friend2 = personEx06.friends[j];
    let ageDiff = Math.abs(friend1.age - friend2.age);

    if (i !== j) {
      console.log(`
Intre ${friend1.name} si ${friend2.name} este o diferenta de ${ageDiff} ani.
      `);
    }
  }
}
