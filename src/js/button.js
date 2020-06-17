const button = document.querySelector('.menu__label');
const menu = document.querySelector('.menu__wrapper');

const toggleMenu = () => {
    button.classList.toggle('burger__active');
    menu.classList.toggle('menu__active');

    !menu.classList.contains('menu__active') && resetActiveStyles();
}

const resetActiveStyles = () => {
    const activePrimaryLink = document.querySelector('.link__arrow--active');
    activePrimaryLink && activePrimaryLink.classList.remove('link__arrow--active');
    const activeBlock = document.querySelector('.menu__secondary-list--show');
    activeBlock && activeBlock.classList.remove('menu__secondary-list--show');
}

const keydownHandler = evt => {
    if (evt.keyCode === 32 || evt.keyCode === 13) {
        evt.preventDefault();
        toggleMenu();
    }
}

button.addEventListener('click', toggleMenu);
button.addEventListener('keydown', keydownHandler);