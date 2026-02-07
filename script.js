// Contact Button Logic
const contactBtn = document.getElementById('contactBtn');
const message = document.getElementById('message');

contactBtn.addEventListener('click', () => {
    message.style.display = 'block';
    contactBtn.innerText = 'Email Revealed!';
});

// Theme Toggle Logic
const themeBtn = document.getElementById('themeToggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Change button text based on mode
    if (body.classList.contains('light-mode')) {
        themeBtn.innerText = "☀️ Light Mode";
    } else {
        themeBtn.innerText = "🌙 Dark Mode";
    }
});