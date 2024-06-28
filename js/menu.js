const menuBtn = document.querySelector('.header__controls');
const mainMenu = document.querySelector('.main-menu');
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu(event) {
    event.preventDefault();
    mainMenu.classList.toggle('active');
    document.body.classList.toggle('menu-active');
}