const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu .nav-item');


    hamburger.addEventListener('click', () => {
        nav.classList.toggle('nav.menu-active');

        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });


        hamburger.classList.toggle('toggle');
    });
}
navSlide();