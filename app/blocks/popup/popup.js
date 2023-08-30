app.popup = {
    name: 'popup',
    description: 'popup',
    init() {
        const overlay = document.querySelector('.overlay');
        const popupBtns = document.querySelectorAll('[data-popup]');
        const popupClose = document.querySelectorAll('.popup__close');
        const body = document.querySelector('body');

        popupBtns.forEach((btn) => {
            btn.addEventListener('click', function () {
                body.classList.add('_lock');
                overlay.classList.add('active');
                document.getElementById(this.getAttribute('data-popup')).classList.add('active');
            });
        }); 

        popupClose.forEach((close) => {
            close.addEventListener('click', () => {
                close.closest('.popup').classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('_lock');
            });
        });

        document.addEventListener('mouseup', (e) => {
            e.stopPropagation();
            const activePopup = document.querySelector('.popup.active');
            
            if (activePopup && activePopup != e.target && activePopup.hasChildNodes(e.target).length === 0) {
                activePopup.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('_lock');
            }
        });

        document.addEventListener('keyup', (e) => {
            const activePopup = document.querySelector('.popup.active');

            if (activePopup && e.keyCode === 27) {
                activePopup.classList.remove('active');
                overlay.classList.remove('active');
                body.classList.remove('_lock');
            }
        });
    }
}
