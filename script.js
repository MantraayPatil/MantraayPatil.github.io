let darkMode = document.querySelector(".darkMode");
let banner = document.querySelector(".banner");

darkMode.addEventListener("click", ()=>{
    banner.classList.toggle("night");
})

let typeAnimation = new Typed("#text",{
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
    loop:true,
    typeSpeed:100,
    backSpeed:50,
    backDelay:1200
});