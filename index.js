
function toggleMenu(){
    document.querySelector('.header__menubar__btn__hambar').classList.toggle('hide');
    document.querySelector('.header__menubar__btn__close').classList.toggle('show');
    document.querySelector('.header__nav').classList.toggle('active');
}

let btn_menu = document.querySelectorAll('.btn__menu');
btn_menu.forEach(btn => {
    btn.addEventListener('click',toggleMenu)
});
