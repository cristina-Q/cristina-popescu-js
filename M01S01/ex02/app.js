let inputLength = document.getElementById('length');
let inputWidth = document.getElementById('width');
let elementResult = document.getElementById('result');
let form = document.querySelector('form');

form.addEventListener(
  'submit',
  (e) => {
    let length = inputLength.value || 0;
    let width = inputWidth.value || 0;
    let result = 0;

    result = length * width;

    elementResult.innerText = result;

    e.preventDefault();
  },
  false,
);
