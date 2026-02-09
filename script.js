// Global state for form submission
var submitted = false;

// 1. THEME TOGGLE LOGIC
const themeBtn = document.getElementById('themeToggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        // Switch icon between Moon and Sun
        themeBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
    });
}

// 2. SCROLL REVEAL OBSERVER
const observerOptions = {
    threshold: 0.15
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Initialize after DOM loads
document.addEventListener("DOMContentLoaded", () => {
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => revealObserver.observe(el));
});