// DOM Elements
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increaseBtn');
const decreaseBtn = document.getElementById('decreaseBtn');
const author = document.getElementById('author');
const year = document.getElementById('year');

// Counter functionality
let count = 0;

function updateCounter() {
    counter.textContent = count;
}

increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

// Update author name
author.textContent = 'elhaze29';

// Update year
year.textContent = new Date().getFullYear();

// Add animation to feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 