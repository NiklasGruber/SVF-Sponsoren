// Images are loaded from images-list.js (auto-generated)
const images = imagesList;
let currentIndex = 0;
const slide = document.getElementById("slide");

function showNextSlide() {
  if (images.length === 0) return;
  
  // Fade out
  slide.style.opacity = 0;
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slide.src = images[currentIndex];
    // Fade in
    slide.style.opacity = 1;
  }, 500);
}

// Initialize first image and start slideshow
if (images.length > 0) {
  slide.src = images[0];
  setInterval(showNextSlide, 10000);
}