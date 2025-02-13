document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); 
    document.getElementById("successMessage").style.display = "block"; 
  

  let isValid = true;

            
            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let message = document.getElementById("message").value.trim();


            let nameError = document.getElementById("nameError");
            let emailError = document.getElementById("emailError");
            let messageError = document.getElementById("messageError");

            
            nameError.style.display = "none";
            emailError.style.display = "none";
            messageError.style.display = "none";

            
            if (name === "") {
                nameError.style.display = "block";
                isValid = false;
            }
            if (email === "" || !email.includes("@")) {
                emailError.style.display = "block";
                isValid = false;
            }
            if (message === "") {
                messageError.style.display = "block";
                isValid = false;
            }

            
            if (isValid) {
                document.getElementById("successMessage").style.display = "block";
                document.getElementById("contactForm").reset();
            }
        });