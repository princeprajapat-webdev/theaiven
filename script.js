const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav_ul');
const navItems = document.querySelectorAll('.nav_ul li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});