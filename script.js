// Get all the card elements
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
        // Elevate the hovered card
        card.style.transform = 'scale(1.1)';
        
        // Gradually hide other cards
        cards.forEach((otherCard) => {
            if (otherCard !== card) {
                otherCard.style.transform = 'scale(0.0)';
            }
        });
    });

    card.addEventListener('mouseout', () => {
        // Reset the transformations on mouseout
        card.style.transform = 'scale(1)';
        cards.forEach((otherCard) => {
            otherCard.style.transform = 'scale(1)';
            
        });
    });
});

window.addEventListener('scroll',reveal);
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (var i = 0; i<reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}