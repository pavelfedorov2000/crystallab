app.tabs = {
    name: 'tabs',
    description: 'tabs',
    init() {
        $('.tab').on('click', function () {
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
        });
    },
};