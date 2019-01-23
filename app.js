// icons
const squares = document.querySelector('.squares');

const squareList = document.querySelectorAll('.square');

const red = document.querySelector('#red');
const green = document.querySelector('#green');
const blue = document.querySelector('#blue');

// buttons
const hide = document.querySelector('#hide');
const show = document.querySelector('#show');
const toggleGreen = document.querySelector('#toggleGreen');
const toggleBlue = document.querySelector('#toggleBlue');
const toggleRed = document.querySelector('#toggleRed');

hide.addEventListener('click', function() {
  squares.forEach(square => (square.style.display = 'none'));
});

show.addEventListener('click', function() {
  squares.forEach(square => (square.style.display = 'block'));
});
