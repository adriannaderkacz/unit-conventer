const toggleBtn = document.querySelector(".slider.round")
const iconEl = document.getElementById("icon-el")

toggleBtn.addEventListener("click", function() {
    let element = document.body;
    element.classList.toggle("dark-mode");

    if (element.classList.contains("dark-mode")) {
        iconEl.className = 'fa-solid fa-moon';
        iconEl.style.color = '#ccc1ff';
    } else {
        iconEl.className = 'fa-solid fa-sun-bright';
        iconEl.style.color = '#ccc1ff';
    }
});