let currentSlide = 0;
let slides = document.getElementsByClassName("slide");
let breadcrumbs = document.getElementsByClassName("slider__navlink");
document.getElementById("next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(numSlide) {
    if (numSlide >= slides.length) {numSlide = 0;}
    if (numSlide < 0) {numSlide = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    breadcrumbs[currentSlide].classList.toggle("active");
    slides[numSlide].classList.toggle("active");
    breadcrumbs[numSlide].classList.toggle("active");
    
    currentSlide = numSlide;
}
//Segitseg