app.accordion = {
    name: 'accordion',
    description: 'your script description',
    init() {
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
