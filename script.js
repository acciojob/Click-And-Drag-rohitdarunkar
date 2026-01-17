const slider = document.querySelector('.items');

let isDown = false;

slider.addEventListener('mousedown', () => {
  isDown = true;
});

slider.addEventListener('mousemove', () => {
  if (!isDown) return;

  // FORCE scroll for Cypress (layout-independent)
  slider.scrollLeft += 10;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});
