let friends = [
  {
    name: 'Dragos',
    surname: 'Iordache',
  },
  {
    name: 'Larry',
    surname: 'Larryson',
  },
  {
    name: 'Steven',
    surname: 'Stevenson',
  },
  {
    name: 'Carol',
    surname: 'Carolson',
  },
  {
    name: 'Andra',
    surname: 'Andrason',
  },
  {
    name: 'Rangar',
    surname: 'Ragnarson',
  },
];

console.warn(`1. Folosind o bucla for afiseaza proprietatea
surname a tuturor obiectelor din arrayul friends.`);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].surname);
}

console.warn(`2. Afiseaza numele complet al tuturor prietenilor,
insa o data ce l-ai gasit pe steven, opreste bucla cu
ajutorul keywordului break.`);

for (let i = 0; i < friends.length; i++) {
  if (friends[i].name === 'Steven') {
    console.log(friends[i].name, friends[i].surname + `   found steven -> 👨🏻`);
    break;
  }

  console.log(friends[i].name, friends[i].surname);
}

/* for (let i = 0; i < friendsLength; i++) {
  let friend = friends[i];
  console.log(`${friend.name} ${friend.surname}`);

  if (friend.name === 'Steven' && friend.surname === 'Stevenson') {
    break;
  }
} */

console.warn(`3. Folosind keywordul continue, afiseaza numele complet
al prietenilor, doar daca numarul de caractere total al numelor lor
este mai mare de 13.`);

for (let i = 0; i < friends.length; i++) {
  if ((friends[i].name + friends[i].surname).length <= 13) {
    continue;
  }

  console.log(friends[i].name, friends[i].surname + `  🎀`);
}

console.warn(`4.Folosind o bucla for afiseaza proprietatea name
a tuturor obiectelor din arrayul friends.`);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name);
}

console.warn('5. Afiseaza numele complet al tuturor prietenilor.');

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name, friends[i].surname);
}

console.warn(`6.Folosind keywordul break, afiseaza numele complet
al prietenilor dar opeste bucla la primul surname care are numarul
de caractere mai mare sau egal decat 9.`);

for (let i = 0; i < friends.length; i++) {
  console.log(friends[i].name, friends[i].surname);
  if (friends[i].surname.length >= 9) {
    break;
  }
}
