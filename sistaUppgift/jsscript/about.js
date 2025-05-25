document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggleContactButton");
    const contactContainer = document.getElementById("contactContainer");

    toggleButton.addEventListener("click", () => {
        if (contactContainer.style.display === "none" || contactContainer.style.display === "") {
            contactContainer.style.display = "block";
            toggleButton.textContent = "Hide Contact Form";
        } else {
            contactContainer.style.display = "none";
            toggleButton.textContent = "Show Contact Form";
        }
    });
});