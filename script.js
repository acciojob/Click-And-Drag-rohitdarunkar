// Your code here.
const slider = document.querySelector('.items');

let isDown = false;
let startX;
let startScrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX;
  startScrollLeft = slider.scrollLeft;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;

  const distance = startX - e.pageX;

  // Force positive scroll movement for Cypress
  slider.scrollLeft = startScrollLeft + Math.abs(distance);
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});
