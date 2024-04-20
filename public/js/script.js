// Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav ) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}
// Menu
const menu = document.querySelector('#menu')
const navMenu = document.querySelector('#nav-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('menu-active')
    navMenu.classList.toggle('hidden')
})

