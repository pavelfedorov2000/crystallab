app.catalogFilters = {
    name: 'catalogFilters',
    description: 'your script description',
    init() {
        const body = document.querySelector('body');
        const filterBtn = document.querySelector('.filter-btn');
        const catalogFilters = document.querySelector('.catalog-filters');
        const catalogFiltersClose = document.querySelector('.js-close-filters');

        if (!filterBtn || !catalogFilters) return;

        filterBtn.addEventListener('click', () => {
            body.classList.add('_lock');
            filterBtn.setAttribute('aria-expanded', true);
            catalogFilters.classList.add('active');
        });

        catalogFiltersClose.addEventListener('click', () => {
            body.classList.remove('_lock');
            filterBtn.setAttribute('aria-expanded', false);
            catalogFilters.classList.remove('active');
        });
    },
};
