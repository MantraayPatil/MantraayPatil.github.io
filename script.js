let darkMode = document.querySelector(".darkMode");
let banner = document.querySelector(".banner");
let sections = document.querySelectorAll(".section-content");
let slideIndex = 0;

// Add click event listener to the dark mode toggle button
darkMode.addEventListener("click", () => {
    // Toggle the "night" class on the banner section
    banner.classList.toggle("night");
    // Toggle the "night" class on all section-content elements
    sections.forEach(section => {
        section.classList.toggle("night");
    });
});

// Add click event listener to the scroll-to-top button
document.querySelector('.scroll-to-top').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Initialize typed.js animation for the text element with id "text"
let typeAnimation = new Typed("#text", {
    strings: [
        "Mantraay Patil",
        "a Developer",
        "Mantraay Patil",
        "an Engineer",
        "Mantraay Patil",
        "an Innovator",
        "Mantraay Patil",
        "a Designer",
        "Mantraay Patil",
        "a Programmer",
        "Mantraay Patil",
        "a Problem Solver",
        "Mantraay Patil",
        "a Leader",
        "Mantraay Patil",
        "a Critical Thinker",
    ],

    loop: true, 
    typeSpeed: 100, 
    backSpeed: 50, 
    backDelay: 1200 
});

// Function to handle slideshow functionality
function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    // Hide all slides initially
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    // Display the current slide
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); 
}

// Add DOMContentLoaded event listener to ensure the function runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    showSlides(); 
});
