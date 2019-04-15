// http://websamuraj.pl/examples/js/projekt8/
// Uzyskaj efekt jak pod tym linkiem 
// Użyj setTimeout zamiast setInterval,
// Opóźniej start pisanie każdego słowa
// Uwaga: Zadanie bardzo trudne

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = ['tekst1', 'tekst2', 'tekst3']

let indexTextX = 0;
let indexTextY = 0;

// Implementacja
const addLetter = () => {
//  setTimeout(clearInterval(spnText),600);
    spnText.textContent += txt[indexTextX][indexTextY];
    indexTextY++;
    if (indexTextY===txt[indexTextX].length)  {
        indexTextX++;
        if (indexTextX===txt.length) return;
        indexTextY=0;
    }
    setTimeout(addLetter, 200);
 }

addLetter(); //pierwsze wywołanie


// Animacja kursora (zostaw bez zmian)
const cursorAnimation = () => {
 spnCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);