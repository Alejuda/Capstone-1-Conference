const hamburguer = document.getElementById('nav-btn');
const closeButton = document.getElementById('close-btn');
const navMenu = document.getElementById('mobile-menu');

hamburguer.addEventListener('click', function(e) {
    navMenu.classList.add('show');
})

closeButton.addEventListener('click', function(e) {
    navMenu.classList.remove('show');
});