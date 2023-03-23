const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const leftArrow = document.querySelector('.slide-arrow--left');
const rightArrow = document.querySelector('.slide-arrow--right');

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;

// Set initial position of slider
slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;

// Move slider to the left
const moveLeft = () => {
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
};

// Move slider to the right
const moveRight = () => {
  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }
  slider.style.transform = `translateX(${-slideIndex * slideWidth}px)`;
};

// Add event listeners to arrows
leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);
