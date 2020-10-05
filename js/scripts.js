// variables
const triggerMotion = document.querySelector('.motionButton');
const targetMotion = document.querySelector('.motion');
const triggerWeb = document.querySelector('.webButton');
const targetWeb = document.querySelector('.web');

// on click
triggerMotion.addEventListener('click', () => {
  targetMotion.classList.toggle('do-this');
});

triggerWeb.addEventListener('click', () => {
  targetWeb.classList.toggle('do-this');
});