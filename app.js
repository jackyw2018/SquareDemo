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

hide.addEventListener('click', function () {
  squareList.forEach(square => (square.style.display = 'none'));
});

show.addEventListener('click', function () {
  squareList.forEach(function (square) {
    square.style.display = ''
    square.classList.remove('none')
  });
  squares.style.display = 'flex';
});

toggleBlue.addEventListener('click', function () {
  blue.classList.toggle('none');
})

toggleGreen.addEventListener('click', function () {
  green.classList.toggle('none');
})

toggleRed.addEventListener('click', function () {
  red.classList.toggle('none');
})

// buttons
const addCircles = document.querySelector('#generate');
const circles = document.querySelector('.circles');
const hideCircles = document.querySelector('#hideCircles')
const showCircles = document.querySelector('#showCircles')

addCircles.addEventListener('click', function () {
  let circleList = document.querySelectorAll('.circle');
  let circle = document.createElement('div');
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let text = (red + green + blue) / 3 > 255 / 2 ? 'black' : 'white';

  circle.classList.add('circle');
  circle.textContent = circleList.length + 1;
  circle.style.backgroundColor = 'rgb(' + [red, green, blue].join(',') + ')';
  circle.style.color = text;
  circles.appendChild(circle);

  // add buttons
  let button = document.createElement('button');
  button.classList.add('.button');
  button.style.backgroundColor = `rgb( ${red},${green},${blue})`
  button.style.color = text;
  button.textContent = `Toggle Circle ${circleList.length + 1}`;
  showCircles.insertAdjacentElement('afterend', button);

  button.addEventListener('click', function () {
    circle.classList.toggle('none');
  })
})

hideCircles.addEventListener('click', function () {
  const circleList = document.querySelectorAll('.circle');
  circleList.forEach(circle => (circle.style.display = 'none'));
});

showCircles.addEventListener('click', function () {
  const circleList = document.querySelectorAll('.circle');
  circleList.forEach(function (circle) {
    circle.style.display = ''
    circle.classList.remove('none')
  });
  circles.style.display = 'flex';
});
