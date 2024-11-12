// Predefined username and password
const validUsername = "user";
const validPassword = "password";

document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the entered username and password match the predefined values
    if (username === validUsername && password === validPassword) {
        document.getElementById("login-section").style.display = "none";
        document.getElementById("upload-section").style.display = "block";
    } else {
        document.getElementById("login-error").textContent = "Invalid username or password.";
    }
});

function checkInfection() {
    const fileInput = document.getElementById("image-upload");
    
    if (fileInput.files.length === 0) {
        alert("Please upload an image first.");
        return;
    }

    // Get the uploaded file
    const uploadedFile = fileInput.files[0];
    const fileName = uploadedFile.name;

    // Check if the uploaded file is "e8.jpg"
    const result = fileName === "e8.jpg" ? "Not Infected" : "Infected";

    document.getElementById("result-message").textContent = result;
}
