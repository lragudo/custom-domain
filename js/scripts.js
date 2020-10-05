// VARIABLES
// web
const triggerWeb = document.querySelector('.webButton');
const targetWeb = document.querySelector('.web');
//motion
const triggerMotion = document.querySelector('.motionButton');
const targetMotion = document.querySelector('.motion');
// print
const triggerPrint = document.querySelector('.printButton');
const targetPrint = document.querySelector('.print');
// illustation
const triggerIllus = document.querySelector('.illusButton');
const targetIllus = document.querySelector('.illustration');

// ON CLICK
// web
triggerWeb.addEventListener('click', () => {
    targetWeb.classList.toggle('do-this');
  });
//   motion
triggerMotion.addEventListener('click', () => {
  targetMotion.classList.toggle('do-this');
});
// print
triggerPrint.addEventListener('click', () => {
  targetPrint.classList.toggle('do-this');
});
// illustation
triggerIllus.addEventListener('click', () => {
    targetIllus.classList.toggle('do-this');
  });
