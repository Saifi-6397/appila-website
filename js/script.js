$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $(".navbar").addClass('fix-nav')
        } else {
            $('.navbar').removeClass('fix-nav');
        }
    });
})

AOS.init();