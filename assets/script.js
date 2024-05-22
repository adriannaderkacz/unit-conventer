const toggleBtn = document.querySelector(".slider.round")

toggleBtn.addEventListener("click", function() {
    let element = document.body;
    element.classList.toggle("dark-mode");
})