let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");

  // Hide all slides
  slides.forEach((slide) => (slide.style.display = "none"));

  // Move to the next slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow
showSlides();

// Manual slide navigation
function changeSlide(n) {
  slideIndex += n;
  let slides = document.querySelectorAll(".slide");

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex - 1].style.display = "block";
}
