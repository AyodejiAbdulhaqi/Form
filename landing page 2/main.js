document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector('nav button');
    const menu = document.querySelector('.mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
        menu.classList.toggle('active');
    });
});