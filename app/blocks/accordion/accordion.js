app.accordion = {
    name: 'accordion',
    description: 'your script description',
    init() {
        $('.accordion-item__toggle').on('click', function () {
            const $accordionItemToggle = $(this);
            const $accordion = $accordionItemToggle.closest('.accordion-item');
            const $accordionItemContent = $accordion.find('.accordion-item__content');

            if ($accordionItemToggle.attr('aria-expanded') === 'false') {
                $accordionItemToggle.attr('aria-expanded', true);
                $accordionItemContent.slideDown();
            } else {
                $accordionItemToggle.attr('aria-expanded', false);
                $accordionItemContent.slideUp();
            }
        });
        
        const accordionItemToggles = document.querySelectorAll(".accordion-item__toggle");

        if (!accordionItemToggles.length) return;

        accordionItemToggles.forEach((toggleBtn) => {
            toggleBtn.addEventListener('click', () => {
                const accordionItemContent = toggleBtn.closest('.accordion-item').querySelector('.accordion-item__content');

                if (toggleBtn.getAttribute('aria-expanded') === 'false') {
                    toggleBtn.setAttribute('aria-expanded', true);
                    accordionItemContent.style.maxHeight = accordionItemContent.scrollHeight + "px";
                } else {
                    toggleBtn.setAttribute('aria-expanded', false);
                    accordionItemContent.style.maxHeight = null;
                }
            });
        });
    },
};
