document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in-text");

    fadeInElements.forEach((element) => {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
    });
});
