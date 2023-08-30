app.promoSlider = {
    name: 'promoSlider',
    description: 'your script description',
    init() {
        const promoSlider = new Swiper('.promo-slider', {
            loop: true,
            slidesPerView: 1,
            speed: 1000,
            //spaceBetween: 30,
            autoplay: true,
            navigation: {
                nextEl: `#promo-slider .swiper-button-next`,
                prevEl: `#promo-slider .swiper-button-prev`,
            },
        });

        const sliderNavBtns = document.querySelectorAll('.slider-nav__btn');

        if (!sliderNavBtns) return;

        promoSlider.on('slideChange', function () {
            document.querySelector('.slider-nav__btn.active').classList.remove('active');
            sliderNavBtns[promoSlider.realIndex].classList.add('active');
        });

        sliderNavBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                document.querySelector('.slider-nav__btn.active').classList.remove('active');
                btn.classList.add('active');
                promoSlider.slideTo(index + 1);
            });
        });
    },
};
