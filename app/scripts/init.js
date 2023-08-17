document.addEventListener('DOMContentLoaded', () => {
    //app.burger.init();
    app.accordion.init();
    //app.select.init();
    //app.tabs.init();
    //app.catalogFilters.init();
    //app.popup.init();
    //app.validation.init();

    const sliderSections = document.querySelectorAll('.section');

    sliderSections.forEach((section) => {
        const slider = section.querySelector('.section__slider-wrap');

        if (!slider) return;

        let sliderId = 'slider--' + Math.floor(Math.random() * 10000000000000 + Date.now());
        slider.setAttribute('id', sliderId);

        const sliderSlides = slider.querySelector('.swiper').getAttribute('data-slides');

        new Swiper(`#${sliderId} .section__slider`, {
            loop: true,
            slidesPerView: 2,
            spaceBetween: 30,
            //autoplay: true,
            navigation: {
                nextEl: `#${sliderId} .swiper-button-next`,
                prevEl: `#${sliderId} .swiper-button-prev`,
            },
            pagination: {
                el: `#${sliderId} .swiper-pagination`,
                type: "bullets",
                clickable: true,
            },
            breakpoints: {
                576: {
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: sliderSlides,
                }
            },
        });
    });

    /* const scrollToSection = () => {
        const scrollBtns = document.querySelectorAll('[data-section]');

        if (!scrollBtns) return;

        scrollBtns.forEach((link) => {
            link.addEventListener('click', () => {
                window.scrollTo({
                    top: document.querySelector(`#${link.getAttribute('data-section')}`).offsetTop,
                    behavior: "smooth"
                });
            });
        });
    }

    scrollToSection(); */

    /* const fileUpload = () => {
        const fileInputs = document.querySelectorAll('input[type="file"]');

        if (!fileInputs.length) return;

        fileInputs.forEach((input) => {
            input.addEventListener('change', function () {
                const label = input.closest('label').querySelector('.btn__text');
                const fileName = this.files[0].name;
                label.textContent = fileName;
            });
        });
    }

    fileUpload(); */

    /* const animatedItems = document.querySelectorAll('.animated');

    if (!animatedItems.length) return;

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

    /*  const rangeSlider = document.getElementById('range-slider');
 
     if (!rangeSlider) return;
 
     noUiSlider.create(rangeSlider, {
         start: [75],
         range: {
             'min': [0],
             'max': [100]
         }
     });
 
     rangeSlider.noUiSlider.on('update', function (values, handle) {
         const rangeValue = rangeSlider.closest('.range').querySelector('.range__value');
 
         if (!rangeValue) return;
 
         rangeValue.innerHTML = `${Math.floor(values[handle])}%`;
     }); */
});