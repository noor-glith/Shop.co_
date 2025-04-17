// Show Modal Function
function showModal() {
    let overlay = document.querySelector('.overlay');
    let box = document.querySelector('.box');

    overlay.classList.add('showoverlay');
    box.classList.add('showbox');

    // Ensure overlay is visible
    overlay.style.display = "flex";
}

// Close Modal Function
function closeModal() {
    let overlay = document.querySelector('.overlay');
    let box = document.querySelector('.box');

    overlay.classList.remove('showoverlay');
    box.classList.remove('showbox');

    // Delay hiding the overlay to match transition time
    // Wait for the CSS transition to complete before hiding
    setTimeout(() => {
        overlay.style.display = "none";
    }, 500);
}

// Attach event listener to all buttons with class "openBtn"
var openBtns = document.querySelectorAll(".openBtn");
openBtns.forEach(btn => {
    btn.addEventListener("click", showModal);
});

// Add event listener for the close button
var closeBtn = document.querySelector(".close");
if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}
let valueDisplays = document.querySelectorAll(".num");
let duration = 1000; // 1-second animation

valueDisplays.forEach((valueDisplay) => {
    let startTime = null;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    
    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;

        let progress = Math.min((currentTime - startTime) / duration, 1);
        let formattedValue = Math.floor(progress * endValue).toLocaleString(); // Format with commas

        valueDisplay.textContent = formattedValue + "+"; // Add "+" at the end

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
});
