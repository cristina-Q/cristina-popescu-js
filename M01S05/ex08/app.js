let button = document.getElementById('clicker');
let removeButton = document.getElementById('remove');
let queryBtn = document.getElementById('query');
let message = document.getElementById('message');

let clickHandler = () => {
  alert('Ai apasat butonul!');
};
button.addEventListener('click', clickHandler);
removeButton.addEventListener('click', () => {
  button.removeEventListener('click', clickHandler);
});

('test');

// 4. Adauga un buton nou in document cu id-ul query si
//folosind addEventListener() ataseaza un eveniment care
//sa foloseasca metoda prompt() pentru a afla varsta utilizatorului.

// 5. Salveaza rezultatul metodei prompt intr-o variabila si afiseaza in consola folosind template strings:
// “Ai aa ani.”.

// 6. Creaza un paragraf cu idul message si folosind getElementById() stocheaza elementul intr-o
// variabila, apoi folosind innerText, afiseaza mesajul de mai devreme in acest paragraf.

queryBtn.addEventListener('click', () => {
  let queryInput = prompt('ce varsta ai?');
  console.log(`Ai ${queryInput} ani.`);
  message.innerText = queryInput;
});
