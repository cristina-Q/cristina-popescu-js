var messageParagraph = document.getElementById('message');
var userName = prompt('Introdu numele:');
/*
var secondMessageParagraph = document.querySelector('.message2');
var thirdMessageParagraph = document.querySelector('body p:nth-of-type(3n)');
// var userNameLength = userName.replaceAll(' ', '').length;
var userNameLength = userName.replace(/ /g, '').length;

var message = `Numele meu este: ${userName}.`;
var message2 = `Numele introdus are ${userNameLength} caractere.`;
var phraseFragment = '';

if (userName.includes('a') === true) {
  phraseFragment = 'include';
} else {
  phraseFragment = 'nu include';
}

var message3 = `Numele introdus ${phraseFragment} litera a.`;

messageParagraph.textContent = message;
secondMessageParagraph.textContent = message2;
thirdMessageParagraph.textContent = message3; */

/* 6. Folosind prompt() si String.includes() afiseaza mesajul:
“Numele introdus contine|nu contine litera a.” */

if (userName === null || userName === '' || isNaN(userName)) {
  userName = 'nume';
  console.warn(`Valoare introdusa nu este un nume.
  Se va cauta litera in:'${userName}'.`);
}

let letter = 'a';

message = `The letter "${letter}" ${
  userName.includes(letter) ? 'is' : 'is not'
} in the word!`;
messageParagraph.innerText = message;
