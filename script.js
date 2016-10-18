$('document').ready(function () {
    var pageTwo = $('.page-two');
    TweenLite.set(pageTwo, {
        autoAlpha: 0,
        scaleX: 0.8,
        scaleY: 0.8,
        ease: 'easeOutBack'
    });

    $('body').on('click', '.page-one h1', function () {
        TweenLite.to($('.page-one'), 0.25, {
            autoAlpha: 0,
            scaleX: 0.8,
            scaleY: 0.8,
            ease: 'easeOutBack',
            onComplete: function () {
                TweenLite.to(pageTwo, 0.35, {
                    autoAlpha: 1,
                    scaleX: 1,
                    scaleY: 1,
                    ease: 'easeOut'
                });
            }
        });
    });
});