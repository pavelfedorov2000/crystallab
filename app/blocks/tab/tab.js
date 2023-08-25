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
    },
};