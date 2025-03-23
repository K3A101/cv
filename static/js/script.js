document.addEventListener("DOMContentLoaded", function () {
const choicesWindow = document.querySelector(".choices");
const view = document.querySelector(".view");
const frontendButton = document.querySelector(".frontend");
const visualDesign = document.querySelector(".visual-design");
const frontendCv = document.querySelector(".cv-frontend");

function displayChoices() {
    frontendButton.addEventListener("click",  () =>{
        view.classList.add("active");
        choicesWindow.classList.add("hidden");
    })
    frontendButton.classList.add("active");
}

displayChoices();
});


