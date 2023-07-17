// Step 1: Get a reference to the existing image element
const img1Element = document.querySelector('.img1');
const img2Element = document.querySelector('.img2');
const heading = document.querySelector('h1');

// Step 2: Set the src attribute of the image
img1Element.src = 'images/dice6.png';
img2Element.src = 'images/dice6.png';

var randomNumber1;
randomNumber1 = Math.floor(Math.random() * 6) + 1;
randomNumber2 = Math.floor(Math.random() * 6) + 1;


var diceImage1 = 'images/dice' + randomNumber1 + '.png';
var diceImage2 = 'images/dice' + randomNumber2 + '.png';


img1Element.src = diceImage1;
img2Element.src = diceImage2;

if(randomNumber1 > randomNumber2){
    heading.textContent = "Player 1 Wins!"
}
else if(randomNumber1 < randomNumber2){
    heading.textContent = "Player 2 Wins!"
}
else {
    heading.textContent = "Draw!"
}