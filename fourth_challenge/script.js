let number = document.querySelector('h6');
let quote = document.querySelector('q');

let button = document.querySelector('button');

button.addEventListener('click', () => {
    fetch('https://api.adviceslip.com/advice')
    .then(Response => Response.json())
    .then(data => {
        number.textContent = `ADVICE #${data.slip.id}`;
        quote.textContent = data.slip.advice;
    });})