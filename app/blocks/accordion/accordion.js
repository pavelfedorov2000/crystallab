app.accordion = {
    name: 'accordion',
    description: 'your script description',
    init() {
        const accordionItemToggles = document.querySelectorAll(".accordion-item__toggle");

        if (!accordionItemToggles.length) return;

        accordionItemToggles.forEach((toggleBtn) => {
            toggleBtn.addEventListener('click', () => {
                const accordionItemContent = toggleBtn.closest('.accordion-item').querySelector('.accordion-item__content');
                const padding = 20;

                if (toggleBtn.getAttribute('aria-expanded') === 'false') {
                    toggleBtn.setAttribute('aria-expanded', true);
                    const height = accordionItemContent.scrollHeight + padding * 2;
                    accordionItemContent.style.maxHeight = height + "px";
                    accordionItemContent.style.paddingTop = padding + "px";
                    accordionItemContent.style.paddingBottom = padding + "px";
                } else {
                    toggleBtn.setAttribute('aria-expanded', false);
                    accordionItemContent.style.maxHeight = null;
                    accordionItemContent.style.paddingTop = '0';
                    accordionItemContent.style.paddingBottom = '0';
                }
            });
        });
    },
};
