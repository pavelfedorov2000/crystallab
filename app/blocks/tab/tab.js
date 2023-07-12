app.tabs = {
    name: 'tabs',
    description: 'tabs',
    init() {
        const tabs = document.querySelectorAll('.tab');

        if (!tabs.length) return;

        tabs.forEach((tab) => {
            const tabsList = tab.closest('.tabs');
            const activeTab = tabsList.querySelector('.tab.active');
            const tabsContentActive = document.querySelector(`#${activeTab.getAttribute('aria-controls')}`);
            const tabsContent = document.querySelector(`#${tab.getAttribute('aria-controls')}`);

            activeTab.classList.remove('active');
            activeTab.setAttribute('aria-selected', false);

            tab.classList.add('active');
            tab.setAttribute('aria-selected', true);

            tabsContentActive.classList.remove('active');
            tabsContent.classList.add('active');
        });

        /* $('.tab').on('click', function () {
            const $tab = $(this);
            const $tabNotActive = $tab.closest('.tabs').find('.tab.active');
            const $tabsContent = $(`#${$tab.attr('aria-controls')}`);
            const $tabsContentNotActive = $(`#${$tabNotActive.attr('aria-controls')}`);

            $tabNotActive.removeClass('active');
            $tabNotActive.attr('aria-selected', false);

            $tab.addClass('active');
            $tab.attr('aria-selected', true);

            $tabsContentNotActive.hide();
            $tabsContent.fadeIn();
        }); */
    },
};