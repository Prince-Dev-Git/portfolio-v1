// 1. Find the button and the hidden message in the HTML
const button = document.getElementById('contactBtn');
const message = document.getElementById('message');

// 2. Listen for a click
button.addEventListener('click', () => {
    // 3. When clicked, show the message and change the button text
    message.style.display = 'block';
    button.innerText = 'Email Revealed!';
});