const primaryLinks = [...document.querySelectorAll('.menu__primary-link')];

const linkHandler = link => {
    const activePrimaryLink = document.querySelector('.link__arrow--active');
    activePrimaryLink && activePrimaryLink.classList.remove('link__arrow--active');
    link.querySelector('.link__arrow').classList.add('link__arrow--active');

    const activeBlock = document.querySelector('.menu__secondary-list--show');
    activeBlock && activeBlock.classList.remove('menu__secondary-list--show');
    const parentList = link.parentNode;
    parentList.querySelector('.menu__secondary-list') && parentList.querySelector('.menu__secondary-list').classList.add('menu__secondary-list--show');
}

primaryLinks.forEach(link => link.addEventListener('mouseenter', () => linkHandler(link)));