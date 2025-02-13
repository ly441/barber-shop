document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents form from refreshing the page
    document.getElementById("successMessage").style.display = "block"; // Show success message
  });
