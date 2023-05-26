$(function () {
    //new WOW().init();
    //app.burger.init();
    //app.slider.init();
    //app.popup.init();

    /* document.querySelectorAll('[data-section]').forEach((link) => {
        link.addEventListener('click', () => {
            window.scrollTo({
                top: document.querySelector(`#${link.getAttribute('data-section')}`).offsetTop,
                behavior: "smooth"
            });
        });
    }); */

    /* $('input[type="file"]').on('change', function () {
        const $input = $(this);
        const fileName = this.files[0].name;
        const $placeholder = $input.closest('label').find('.placeholder');
        $placeholder.text(fileName);
    }); */

    /* const animatedItems = document.querySelectorAll('.animated');

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
                observer.unobserve(entry.target)
            } else {
                entry.target.classList.remove('in-view');
            }
        });
    }

    const options = {
        // root: по умолчанию window, но можно задать любой элемент-контейнер
        rootMargin: '0px 0px 75px 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver(callback, options);

    animatedItems.forEach((item) => observer.observe(item)); */


    //smoooth scroll to section
    /* document.querySelectorAll('.menu__link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: document.getElementById(link.getAttribute('data-section')).offsetTop,
                behavior: "smooth"
            });
            body.classList.remove('_lock');
            burgerBtn.classList.remove('.active');
            burgerMenu.classList.remove('.active');
        });
    }); */

    // Custom js select
    /* let selectItem = document.querySelector('.select');
    let selectTitle = selectItem.querySelector('.select__title');
    let selectLabels = selectItem.querySelectorAll('.select__label');
    // Toggle menu
    selectTitle.addEventListener('click', () => {
        if ('active' === selectItem.getAttribute('data-state')) {
            selectItem.setAttribute('data-state', '');
        } else {
            selectItem.setAttribute('data-state', 'active');
        }
    });
    // Close when click to option
    for (let i = 0; i < selectLabels.length; i++) {
        selectLabels[i].addEventListener('click', (e) => {
            selectTitle.textContent = e.target.textContent;
            selectItem.setAttribute('data-state', '');
        });
    } */

    //js
    /* const overlay = document.querySelector('.overlay');
    const openPopup = document.querySelectorAll('.open-popup');
    const popup = document.querySelector('#popup');
    const thanksPopup = document.querySelector('#thanks');
    const popupClose = document.querySelectorAll('.popup__close');
    openPopup.addEventListener('click', function () {
        body.classList.add('_lock');
        overlay.style.display = 'block';
        document.getElementById(this.getAttribute('data-popup')).style.display = 'block';
    });
    popupClose.forEach(close => {
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            close.parentElement.style.display = 'none';
            body.classList.remove('_lock');
        });
    });
    document.querySelectorAll('.popup').forEach(popup => {
        let popupForm = popup.querySelector('form');
        popupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            popupForm.querySelectorAll('input').forEach(input => {
                input.value = '';
            });
            popupForm.parentElement.style.display = 'none';
            thanksPopup.style.display = 'block';
        });
    }); */

    /* const searchForm = document.querySelector('.search-form');
    const searchInput = searchForm.querySelector('.search-form__input');
    const searchBtn = document.querySelector('.header__search-btn');
    searchBtn.addEventListener('click', function () {
        searchForm.classList.add('search-form--active');
    });
    
    document.addEventListener('mouseup', (e) => {
        if (searchForm != e.target && searchInput != e.target) {
            searchForm.classList.remove('search-form--active');
        }
    }); */
});