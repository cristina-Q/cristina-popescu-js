let larry = {
  name: 'Larry',
  surname: 'Larryson',
  friends: {},
};

let dragos = {
  name: 'Dragos',
  surname: 'Iordache',
  friends: {},
};
let carol = {
  name: 'Carol',
  surname: 'Carolson',
  friends: {},
};
let andra = {
  name: 'Andra',
  surname: 'Andrason',
  friends: {},
};
let steven = {
  name: 'Steven',
  surname: 'Stevenson',
  friends: {},
};

dragos.friends.larry = larry;
dragos.friends.steven = steven;
dragos.friends.andra = andra;

larry.friends.dragos = dragos;
steven.friends.dragos = dragos;
andra.friends.dragos = dragos;

// console.log(dragos);
// console.log(dragos.friends);

// Seteaza-l pe Steven ca prieten al lui Larry
// si al Anitei (si invers);

steven.friends.larry = larry;
steven.friends.andra = andra;
steven.friends.steven = steven;
steven.friends.steven = steven;

andra.friends.carol = carol;
carol.friends.andra = andra;

// Folosind keywordul delete sterge prietenia
//  dintre Dragos si Larry (si invers).

delete dragos.friends.larry;
delete larry.friends.dragos;

console.log(
  `${carol.friends.andra.friends.dragos.name} ${carol.friends.andra.friends.dragos.surname}`,
);

/* Folosind obiectul Anita afiseaza numarul total
de caractere al numelui complet al lui Dragos. */

console.log(
  `${andra.friends.dragos.name}${andra.friends.dragos.surname}.length`,
);
