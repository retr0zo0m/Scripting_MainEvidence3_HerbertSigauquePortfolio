// scripts.js

function fadeInElements() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        element.classList.add('show');
    });
}

window.onload = fadeInElements;
