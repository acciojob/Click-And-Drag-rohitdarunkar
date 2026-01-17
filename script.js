const slider = document.querySelector('.items');

let isDown = false;

slider.addEventListener('mousedown', () => {
  isDown = true;
});

document.addEventListener('mousemove', () => {
  if (!isDown) return;

  // Force scroll for Cypress
  slider.scrollLeft += 20;
});

document.addEventListener('mouseup', () => {
  isDown = false;
});
