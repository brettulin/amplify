// Scroll-triggered animation for shirt image
export function scrollAnimation() {
    const shirtSrc = '/shirt.PNG'; // Define the source of the shirt image
    const shirt = document.querySelector(`img[src="${shirtSrc}"]`);
    if (!shirt) return;
    
    const shirtPosition = shirt.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (shirtPosition < windowHeight && shirtPosition > 0) {
        shirt.classList.add('visible');
        shirt.classList.remove('hidden');
    } else {
        shirt.classList.add('hidden');
        shirt.classList.remove('visible');
    }
}

// Debounce function to limit the rate at which the scroll event handler is called
export function debounce(func, wait) {
    let timeout;
    return function(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}