var submitted = false;

// Theme Toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    themeBtn.textContent = document.body.classList.contains('light-mode') ? '☀️' : '🌙';
});

// Scroll Reveal Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
});