const menu_burger = document.querySelector('.menu-burger');
const menu = document.querySelector('.header-menu');
const body = document.querySelector('body');

menu_burger.addEventListener("click", function (e) {
    menu_burger.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('lock');
});

const spoiler = document.getElementsByClassName('spoiler-wrap');

for (i = 0; i < spoiler.length; i++) {
    spoiler[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })
}

new Swiper('.swiper-container', {
    parallax: true,
    speed: 1000,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
    }
});