function slideInElements() {
    const elements = document.querySelectorAll('.banner, .sub-banner');
    elements.forEach(element => {
        element.classList.add('slide-in');
    });
}

window.onload = slideInElements;