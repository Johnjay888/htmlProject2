
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('active')
    navbar.classList.toggle('active')
};


window.onscroll = () => {
    menu.classList.remove('active')
    navbar.classList.remove('active')

};


