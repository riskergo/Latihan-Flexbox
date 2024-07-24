const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// with arrow function
// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('slide')
// });

// standar function
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide')
});