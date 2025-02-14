let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => (slide.style.display = "none")); // Hide all slides

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block"; // Show current slide
  setTimeout(showSlides, 3000); // Change every 3 seconds
}

showSlides();
