
ScrollReveal().reveal('.animate', { delay: 200, distance: '50px', origin: 'bottom', duration: 1000 });

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
});


