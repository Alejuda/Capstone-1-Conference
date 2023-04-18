const hamburguer = document.getElementById('nav-btn');
const navMenu = document.getElementById('mobile-menu');

const closeMenu = document.querySelectorAll('.close-mobile-menu');


hamburguer.addEventListener('click', function(e) {
    navMenu.classList.add('show');
})

Array.from(closeMenu).forEach( (button) => {
    button.addEventListener('click', function(e) {
        navMenu.classList.remove('show');
    });
}
);