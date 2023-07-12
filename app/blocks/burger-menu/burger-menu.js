app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        const body = document.querySelector('body');
        const burgerBtn = document.querySelector('.burger-btn');
        const burgerMenu = document.querySelector('.burger-menu');
        //const burgerMenuClose = document.querySelector('.burger-menu__close');
        //const menuLinks = document.querySelectorAll('.menu__link');

        if (!burgerBtn || !burgerMenu) return;

        burgerBtn.addEventListener('click', () => {
            if (burgerBtn.getAttribute('aria-expanded') === 'false') {
                body.classList.add('_lock');
                burgerBtn.setAttribute('aria-expanded', true);
                burgerBtn.setAttribute('aria-label', 'Закрыть меню');
                burgerMenu.classList.add('active');
            } else {
                body.classList.remove('_lock');
                burgerBtn.setAttribute('aria-expanded', false);
                burgerBtn.setAttribute('aria-label', 'Открыть меню');
                burgerMenu.classList.remove('active');
            }
        });

        /* burgerBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            burgerBtn.classList.add('active');
            burgerMenu.classList.add('active');
        });

        if (!burgerMenuClose) return;

        burgerMenuClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            burgerBtn.classList.remove('active');
            burgerMenu.classList.remove('active');
        }); */

        /* menuLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                body.classList.remove('_lock');
                burgerBtn.classList.remove('active');
                burgerMenu.classList.remove('active');
            });
        }); */
    },
};
