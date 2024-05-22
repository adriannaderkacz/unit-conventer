const toggleBtn = document.querySelector(".slider.round")
const iconEl = document.getElementById("icon-el")

// DARK MODE
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

// UNIT CONVERSION
const convertBtn = document.querySelector(".convert-btn");
const valueEl = document.getElementById("value-el");
const valueMeters = document.getElementById("value-meters");
const valueFeet = document.getElementById("value-feet");
const valueGallons = document.getElementById("value-gallons");
const valueLiters = document.getElementById("value-liters");
const valuePounds = document.getElementById("value-pounds");
const valueKilos = document.getElementById("value-kilos");
const valueInput = document.querySelectorAll(".value-input")

convertBtn.addEventListener("click", function() {
    const inputValue = parseFloat(valueEl.value);
    
    valueInput.forEach(input => {
        input.textContent = inputValue;
    });
    
    // Conversion rates
    const metersToFeet = 3.28084;
    const feetToMeters = 0.3048;
    const litersToGallons = 0.264172;
    const gallonsToLiters = 3.78541;
    const kilosToPounds = 2.20462;
    const poundsToKilos = 0.453592;


    // Perform conversion
    const feetValue = inputValue * metersToFeet;
    const metersValue = inputValue * feetToMeters;
    const litersValue = inputValue * gallonsToLiters;
    const gallonsValue = inputValue * litersToGallons;
    const kilosValue = inputValue * poundsToKilos;
    const poundsValue = inputValue * kilosToPounds;

    // Update result elements
    valueFeet.textContent = feetValue.toFixed(3);
    valueMeters.textContent = metersValue.toFixed(3);
    valueLiters.textContent = litersValue.toFixed(3);
    valueGallons.textContent = gallonsValue.toFixed(3);
    valueKilos.textContent = kilosValue.toFixed(3);
    valuePounds.textContent = poundsValue.toFixed(3);
});
