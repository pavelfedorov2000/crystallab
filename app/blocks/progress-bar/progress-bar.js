app.progressBar = {
    name: 'progressBar',
    description: 'your script description',
    init() {
        $(".js-progress-bar").each(function (i, item) {
            const circle = $(item);
            const dataProgress = circle.closest('.progress-bar').attr('data-progress');
            const strokeDashOffsetValue = 100 - (+dataProgress * 100);
            circle.css("stroke-dashoffset", strokeDashOffsetValue);
        });
    },
};
