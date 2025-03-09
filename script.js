// JavaScript for interactive dropdown menu (optional enhancements)
document.addEventListener("DOMContentLoaded", function () {
    let dropdown = document.querySelector(".dropdown");

    dropdown.addEventListener("mouseover", function () {
        this.querySelector(".dropdown-menu").style.display = "block";
    });

    dropdown.addEventListener("mouseout", function () {
        this.querySelector(".dropdown-menu").style.display = "none";
    });

    console.log("Curriculum website loaded successfully.");
});
