const images = [
  "images/image1.png",
  "images/image2.jpeg",
  "images/somename.png"
];

let currentIndex = 0;
const slide = document.getElementById("slide");

function showNextSlide() {
  // Fade out
  slide.style.opacity = 0;
  
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % images.length;
    slide.src = images[currentIndex];
    // Fade in
    slide.style.opacity = 1;
  }, 500);
}

// Change every 4 seconds
setInterval(showNextSlide, 4000);