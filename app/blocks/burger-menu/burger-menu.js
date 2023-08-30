app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.menu');
        const menuClose = document.querySelector('.menu__close');

        if (!burgerBtn || !burgerMenu) return;

        burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerMenu.classList.add('active');
        });

        if (!menuClose) return;

        menuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerMenu.classList.remove('active');
        });
    },
};
