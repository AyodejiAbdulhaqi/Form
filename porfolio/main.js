// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobile-nav');

    burger.addEventListener('click', () => {
        mobileNav.style.display = mobileNav.style.display === 'none' || mobileNav.style.display === '' ? 'flex' : 'none';
    });
});
