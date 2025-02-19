
let slideIndex = 0;

function showBarberSlides() {
  let slides = document.querySelectorAll(".barber-slide");

  slides.forEach((slide) => (slide.style.display = "none"));

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.animation = "fadeEffect 1.5s";

  setTimeout(showBarberSlides, 3000);
}

showBarberSlides();
