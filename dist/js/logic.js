const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const navLinks = document.querySelectorAll('.menu-nav__link');
let isOpen = false;

menuBtn.addEventListener('click', open);


function open(){
    if(!isOpen) {
        hamburger.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(navItem => {
            navItem.classList.add('open');
        });
        isOpen = true;
    }
    else {
        hamburger.classList.remove('open');
        menuNav.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach(navItem => {
            navItem.classList.remove('open');
        });
        isOpen = false;
    }
}
